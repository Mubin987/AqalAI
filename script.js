function showDetails(step) {
    const steps = {
        1: {
            title: "MRI Image Preprocessing",
            description: "In this stage, we take raw brain MRI scans in NIfTI (.nii) format and convert them into standard 2D or 3D images for further analysis. This step also involves intensity normalization, skull stripping (removing non-brain tissues), and resizing images to a fixed dimension for model compatibility."
        },
        2: {
            title: "Biomarker Extraction",
            description: "Key Alzheimer's disease biomarkers like hippocampal volume and cortical thickness are extracted using FreeSurfer. These biomarkers help in assessing brain atrophy. The extracted values are stored in a CSV file, which will later be combined with MRI features for model training."
        },
        3: {
            title: "Feature Fusion",
            description: "At this stage, we integrate extracted numerical biomarkers (from CSV) with deep learning features extracted from MRI images. The combined feature set enhances the model’s ability to detect Alzheimer's by using both structural information and machine-learning-based insights."
        },
        4: {
            title: "Model Training & Evaluation",
            description: "We use a Hybrid Vision Transformer (HViT), combining Convolutional Neural Networks (CNNs) and Swin Transformers to classify MRI scans into Alzheimer's Disease (AD), Mild Cognitive Impairment (MCI), or a healthy brain. The model is trained on a labeled dataset, using techniques like data augmentation and hyperparameter tuning to improve accuracy."
        },
        5: {
            title: "Prediction & Output",
            description: "Once trained, the model is used to predict whether a given MRI scan belongs to a healthy individual, a patient with MCI, or someone with AD. The output includes a probability score for each category, and an explainability module may highlight affected brain regions."
        }
    };

    document.getElementById("popup-title").innerText = steps[step].title;
    document.getElementById("popup-description").innerText = steps[step].description;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}