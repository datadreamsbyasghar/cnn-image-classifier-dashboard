from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import torch
import torchvision.transforms as transforms
import io
import torch.nn as nn
import torch.nn.functional as F

class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 16, 3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(16, 32, 3, padding=1)
        self.fc1 = nn.Linear(32 * 8 * 8, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 32 * 8 * 8)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# ✅ Load CNN model
model = SimpleCNN()
model.load_state_dict(torch.load(
    r"D:\Machine Learning\Convolutional Neural Network\cnn-backend\Model\cnn_model.pt",
    map_location=torch.device("cpu")
))
model.eval()

# ✅ CIFAR-10 class labels
classes = ['airplane', 'automobile', 'bird', 'cat', 'deer',
           'dog', 'frog', 'horse', 'ship', 'truck']

# ✅ Image preprocessing (same as training)
transform = transforms.Compose([
    transforms.Resize((32, 32)),
    transforms.ToTensor(),
    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
])

# ✅ Create FastAPI app
app = FastAPI()

# ✅ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Prediction route
@app.post("/predict-image")
async def predict_image(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        input_tensor = transform(image).unsqueeze(0)  # Add batch dimension
        output = model(input_tensor)
        _, predicted = torch.max(output.data, 1)
        label = classes[predicted.item()]
        return {"prediction": label}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")