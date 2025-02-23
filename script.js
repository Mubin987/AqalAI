document.addEventListener("DOMContentLoaded", function () {
    const steps = {
        1: {
            title: "MRI Image Preprocessing",
            description: [
                "Convert raw MRI scans (.nii format) to usable image formats.",
                "Apply skull stripping to remove non-brain tissues.",
                "Normalize intensity values for consistent pixel ranges.",
                "Resize images to a fixed size (e.g., 128×128×128) for deep learning models."
            ]
        },
        2: {
            title: "Biomarker Extraction",
            description: [
                "Extract hippocampal volume and cortical thickness using FreeSurfer.",
                "Segment different brain regions to detect atrophy patterns.",
                "Store extracted biomarkers in a CSV file for further processing."
            ]
        },
        3: {
            title: "Feature Fusion",
            description: [
                "Combine MRI-based deep learning features with biomarker data.",
                "Use CNN/Swin Transformer for extracting imaging features.",
                "Fuse extracted biomarkers and MRI features into a single dataset.",
                "Ensure feature scaling and normalization for consistency."
            ]
        },
        4: {
            title: "Model Training & Evaluation",
            description: [
                "Train a Hybrid Vision Transformer (HViT) model using Swin Transformer.",
                "Optimize with hyperparameter tuning to improve accuracy.",
                "Use data augmentation techniques to prevent overfitting.",
                "Evaluate model performance with metrics like accuracy, sensitivity, and specificity."
            ]
        },
        5: {
            title: "Prediction & Output",
            description: [
                "Use the trained model to classify MRI scans as AD, MCI, or Healthy.",
                "Generate probability scores for each class.",
                "Create heatmaps to highlight affected brain regions.",
                "Provide a final diagnosis report with confidence levels."
            ]
        }
    };

    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const closeBtn = document.querySelector(".close");

    function showDetails(step) {
        popupTitle.innerText = steps[step].title;

        // Clear previous content and add new bullet points
        popupDescription.innerHTML = "";
        let ul = document.createElement("ul");

        steps[step].description.forEach(point => {
            let li = document.createElement("li");
            li.innerText = point;
            ul.appendChild(li);
        });

        popupDescription.appendChild(ul);
        popup.style.display = "block";
        setTimeout(() => popup.classList.add("show"), 10);
    }

    function closePopup() {
        popup.classList.remove("show");
        setTimeout(() => (popup.style.display = "none"), 300);
    }

    // Attach event listeners
    document.querySelectorAll(".step").forEach((stepElement, index) => {
        stepElement.addEventListener("click", () => showDetails(index + 1));
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener("click", closePopup);

    // Close popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Close popup on "Esc" key press
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});
