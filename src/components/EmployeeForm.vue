<template>
    <div class="employee-form">
        <h2>Employee Registration Form</h2>

        <p class="personal-info">Personal Information</p>

        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="employee.name" id="name" type="text" required minlength="3" maxlength="50"
                    placeholder="Enter full name" />
            </div>

            <div class="form-group">
                <label for="employeeContactNumber">Contact Number</label>
                <input v-model="employee.employeeContactNumber" id="employeeContactNumber" type="text" required
                    pattern="^\d{10}$" placeholder="Enter contact number" />
            </div>

            <div class="form-group">
                <label>Family Contact Number</label>
                <input v-model="employee.familyDetails.contactNumbers" type="text" required pattern="^\d{10}$"
                    placeholder="Enter contact number" />
            </div>

            <div class="form-group">
                <label for="accountNumber">Account Number</label>
                <input v-model="employee.accountNumber" id="accountNumber" type="text" required pattern="^\d{9,18}$"
                    placeholder="Enter account number" />
            </div>

            <div class="form-group">
                <label for="gender">Gender</label>
                <select v-model="employee.gender" id="gender" required>
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div class="form-group">
                <label for="occupation">Occupation</label>
                <input v-model="employee.occupation" id="occupation" type="text" required minlength="3" maxlength="50"
                    placeholder="Enter occupation" />
            </div>

            <div class="form-group">
                <label for="department">Department</label>
                <input v-model="employee.department" id="department" type="text" required minlength="3" maxlength="50"
                    placeholder="Enter department" />
            </div>

            <div class="form-group">
                <label for="salary">Salary</label>
                <input v-model="employee.salary" id="salary" type="number" min="0" required
                    placeholder="Enter salary" />
            </div>

            <div class="form-group">
                <label for="joiningDate">Joining Date</label>
                <input v-model="employee.joiningDate" id="joiningDate" type="date" required
                    :max="new Date().toISOString().split('T')[0]" />
            </div>

            <div class="form-group address">
                <label for="fullAddress">Full Address</label>
                <textarea v-model="employee.fullAddress" id="fullAddress" required minlength="10" maxlength="250"
                    placeholder="Enter full address"></textarea>
            </div>


            <div class="form-group">
                <label for="panNumber">PAN Number</label>
                <input v-model="employee.panNumber" id="panNumber" type="text" required
                    pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$" placeholder="Enter PAN number" />
            </div>

            <div class="form-group">
                <label for="panImage">Upload PAN Card Image</label>
                <input @change="handlePanImageUpload" id="panImageInput" type="file" accept="image/*" hidden />
                <button type="button" @click="triggerFileUpload">Choose Image</button>

                <div v-if="croppedImageSrc" class="image-preview">
                    <h4>Cropped PAN Card Preview</h4>
                    <img :src="croppedImageSrc" alt="Cropped PAN Card" />
                </div>

                <button v-if="panImageSrc" type="button" @click="openCropperModal">Crop Image</button>
            </div>

            <div class="form-group">
                <label for="aadharNumber">Aadhar Number</label>
                <input v-model="employee.aadharNumber" id="aadharNumber" type="text" required pattern="^\d{12}$"
                    placeholder="Enter Aadhar number" />
            </div>

            <div class="form-group">
                <label for="aadharImage">Upload Aadhar Card Image</label>
                <input @change="handleAadharImageUpload" id="aadharImageInput" type="file" accept="image/*" hidden />
                <button type="button" @click="triggerAadharFileUpload">Choose Image</button>

                <div v-if="croppedAadharImageSrc" class="image-preview">
                    <h4>Cropped Aadhar Card Preview</h4>
                    <img :src="croppedAadharImageSrc" alt="Cropped Aadhar Card" />
                </div>

                <button v-if="aadharImageSrc" type="button" @click="openAadharCropperModal">Crop Image</button>
            </div>

            <div v-if="showAadharCropperModal" class="modal">
                <div class="modal-content">
                    <span class="close" @click="closeAadharCropperModal">&times;</span>
                    <h3>Crop Aadhar Image</h3>
                    <div class="crop-container">
                        <img :src="aadharImageSrc" ref="aadharImage" alt="Crop Aadhar Image Preview" />
                    </div>
                    <button @click="cropAadharImage">Crop & Save</button>
                </div>
            </div>


            <button type="submit" class="submit-button">Submit</button>
        </form>

        <!-- Cropper Modal -->
        <div v-if="showCropperModal" class="modal">
            <div class="modal-content">
                <span class="close" @click="closeCropperModal">&times;</span>
                <h3>Crop Image</h3>
                <div class="crop-container">
                    <img :src="panImageSrc" ref="panImage" alt="Crop Image Preview" />
                </div>
                <button @click="cropImage">Crop & Save</button>
            </div>
        </div>


        <div v-if="showConfirmationModal" class="confirmation-modal">
            <div class="confirmation-modal-content">
                <span class="modal-close" @click="closeConfirmationModal">&times;</span>
                <h3>Confirm Employee Details</h3>
                <div class="employee-info">
                    <p><strong>Name:</strong> {{ employee.name }}</p>
                    <p><strong>Contact Number:</strong> {{ employee.employeeContactNumber }}</p>
                    <p><strong>Family Contact Number:</strong> {{ employee.familyDetails.contactNumbers }}</p>
                    <p><strong>Account Number:</strong> {{ employee.accountNumber }}</p>
                    <p><strong>Gender:</strong> {{ employee.gender }}</p>
                    <p><strong>Occupation:</strong> {{ employee.occupation }}</p>
                    <p><strong>Department:</strong> {{ employee.department }}</p>
                    <p><strong>Salary:</strong> {{ employee.salary }}</p>
                    <p><strong>Joining Date:</strong> {{ employee.joiningDate }}</p>
                    <p><strong>Full Address:</strong> {{ employee.fullAddress }}</p>
                    <p><strong>PAN Number:</strong> {{ employee.panNumber }}</p>
                    <p><strong>Aadhar Number:</strong> {{ employee.aadharNumber }}</p>
                </div>
                <div class="modal-actions">
                    <button class="action-confirm" @click="confirmSubmission">OK</button>
                    <button class="action-cancel" @click="closeConfirmationModal">Go Back</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import { ref, nextTick } from 'vue';
import { useEmployeeStore } from '@/stores/employeeStore';

const store = useEmployeeStore();
const employee = ref(store.employee);
const panImageSrc = ref(null);
const croppedImageSrc = ref(null);
const showCropperModal = ref(false);
const showConfirmationModal = ref(false);
let cropper = null;

const submitForm = () => {
    store.setEmployeeData(employee.value);
    showConfirmationModal.value = true;
    console.log("Employee data submitted:", employee.value);
};

const confirmSubmission = () => {
    store.setEmployeeData(employee.value);
    console.log("Employee data submitted:", employee.value);
    closeConfirmationModal();
};

const closeConfirmationModal = () => {
    showConfirmationModal.value = false;
};

const handlePanImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        panImageSrc.value = URL.createObjectURL(file);
    } else {
        alert("Please select a valid image file.");
    }
};

const openCropperModal = () => {
    showCropperModal.value = true;

    // Initialize cropper once the image source is set
    nextTick(() => {
        if (cropper) {
            cropper.destroy();
        }
        const imageElement = document.querySelector('.crop-container img');
        cropper = new Cropper(imageElement, {
            aspectRatio: 4 / 3, // Adjust aspect ratio as needed
            viewMode: 1,
            autoCropArea: 1,
            responsive: true,
        });
    });
};

const cropImage = () => {
    if (cropper) {
        cropper.getCroppedCanvas().toBlob((blob) => {
            // Create a preview URL for the cropped image
            croppedImageSrc.value = URL.createObjectURL(blob);
            // Store the blob for uploading
            employee.value.panImage = blob; // Add the cropped image to employee data
            console.log("Cropped image ready for upload", blob);
            closeCropperModal();
        }, 'image/jpeg', 0.8); // Adjust the format and quality here
    }
};

const closeCropperModal = () => {
    showCropperModal.value = false;
    if (cropper) {
        cropper.destroy(); // Clean up the cropper instance
    }
};

const triggerFileUpload = () => {
    document.getElementById("panImageInput").click();
};

// const addContactNumber = () => {
//     if (employee.value.familyDetails.contactNumbers.length < 5) {
//         employee.value.familyDetails.contactNumbers.push('');
//     } else {
//         alert("You can add up to 5 contact numbers only.");
//     }
// };


// Aadhar Image Variables
const aadharImageSrc = ref(null);
const croppedAadharImageSrc = ref(null);
const showAadharCropperModal = ref(false);
let aadharCropper = null;

const handleAadharImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        aadharImageSrc.value = URL.createObjectURL(file);
    } else {
        alert("Please select a valid image file.");
    }
};

const openAadharCropperModal = () => {
    showAadharCropperModal.value = true;

    // Initialize cropper once the image source is set
    nextTick(() => {
        if (aadharCropper) {
            aadharCropper.destroy();
        }
        const imageElement = document.querySelector('.crop-container img');
        aadharCropper = new Cropper(imageElement, {
            aspectRatio: 4 / 3, // Adjust aspect ratio as needed
            viewMode: 1,
            autoCropArea: 1,
            responsive: true,
        });
    });
};

const cropAadharImage = () => {
    if (aadharCropper) {
        aadharCropper.getCroppedCanvas().toBlob((blob) => {
            // Create a preview URL for the cropped image
            croppedAadharImageSrc.value = URL.createObjectURL(blob);
            // Store the blob for uploading
            employee.value.aadharImage = blob; // Add the cropped image to employee data
            console.log("Cropped Aadhar image ready for upload", blob);
            closeAadharCropperModal();
        }, 'image/jpeg', 0.8); // Adjust the format and quality here
    }
};

const closeAadharCropperModal = () => {
    showAadharCropperModal.value = false;
    if (aadharCropper) {
        aadharCropper.destroy(); // Clean up the cropper instance
    }
};

const triggerAadharFileUpload = () => {
    document.getElementById("aadharImageInput").click();
};

</script>

<style lang="scss" scoped>
.employee-form {
    max-width: 700px;
    margin: 0 auto;
    padding: 2em;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    font-family: 'Inter';

    h2 {
        text-align: center;
        font-size: 2rem;
        color: #333;
        margin-bottom: 1.5em;
        border-bottom: 2px solid #eaeaea;
        font-family: 700;
        font-family: 'Inter';
    }

    .personal-info {
        border-bottom: 2px solid #eaeaea;
        margin: 40px 0px 30px 0px;
        color: #666;
        font-size: 1.1rem;
        font-family: 'Inter';
    }


    form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5em;

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5em;

            label {
                color: #666;
                font-family: 'Inter';

            }

            input {
                padding: 0.8rem;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-family: 'Inter';
                background-color: #F1F5F9;

                &:focus {
                    outline: none;
                    border-color: #212020;
                }

                &:hover {
                    border: 1px solid #212020;
                }

                &::placeholder {
                    color: #B0B0B0;
                    font-family: 'Inter';

                }
            }

            textarea {
                width: 100%;
                height: 100px;
                max-height: 120px;
                resize: vertical;
                overflow-y: auto;
                padding: 0.8rem;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-family: 'Inter';
                background-color: #F1F5F9;
            }


            select {
                padding: 0.8rem;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-family: 'Inter';
                background-color: #F1F5F9;

                &:focus {
                    outline: none;
                    border-color: #212020;
                }

                &:hover {
                    border: 1px solid #212020;
                }

                &::placeholder {
                    color: #B0B0B0;
                    font-family: 'Inter';

                }
            }

            button {
                padding: 0.5em 1em;
                border: none;
                border-radius: 4px;
                background-color: #007bff;
                color: white;
                cursor: pointer;

                &:hover {
                    background-color: #0056b3;
                }
            }

            .image-preview {
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    height: 100px;
                    width: 100px;
                    border-radius: 8px;
                }
            }
        }

        .submit-button {
            grid-column: span 2;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            padding: 0.5em 0;
            border: none;
            border-radius: 6px;
            cursor: pointer;

            &:hover {
                background-color: #0056b3;
            }
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        .modal-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            position: relative;

            .close {
                position: absolute;
                top: 10px;
                right: 15px;
                cursor: pointer;
                font-size: 20px;
            }

            button {
                padding: 0.5em 1em;
                border: none;
                margin-top: 10px;
                border-radius: 4px;
                background-color: #007bff;
                color: white;
                cursor: pointer;

                &:hover {
                    background-color: #0056b3;
                }
            }
        }
    }

    .confirmation-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.76);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;

        .confirmation-modal-content {
            background-color: #FFFFFF;
            width: 90%;
            max-width: 500px;
            height: auto;
            padding: 20px;
            border-radius: 20px;
            box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
            position: relative;

            .modal-close {
                position: absolute;
                top: -48px;
                right: -60px;
                font-size: 3.5rem;
                cursor: pointer;
                color: #FFFFFF;

                &:hover {
                    color: #f44336;
                }
            }

            h3 {
                text-align: center;
                font-size: 1.5rem;
                color: #333;
                font-family: 700;
                font-family: 'Inter';
            }

            .employee-info {

                p {
                    height: 45px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 1rem;
                    line-height: 1.5;
                    color: #666;
                    margin: 5px 0;
                    font-family: 'Inter';

                    border-top: 1px dotted #bebcbc;

                    strong {
                        width: 65%;
                        font-family: 'Inter';

                    }
                }
            }

            .modal-actions {
                display: flex;
                justify-content: space-around;
                margin-top: 20px;

                button {
                    padding: 8px 20px;
                    border-radius: 4px;
                    font-size: 1rem;
                    cursor: pointer;
                    border: none;
                }

                .action-confirm {
                    background-color: #4CAF50;
                    color: white;
                }

                .action-cancel {
                    background-color: #f44336;
                    color: white;
                }
            }

        }

    }















}
</style>
