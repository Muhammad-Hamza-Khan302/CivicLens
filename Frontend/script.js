// =====================================================
// CIVICLENS FRONTEND
// =====================================================

const API_BASE_URL = "http://127.0.0.1:8000";


// =====================================================
// AI CHAT
// =====================================================

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");


function addMessage(message, sender) {

    const div = document.createElement("div");

    div.classList.add("message");

    if (sender === "user") {
        div.classList.add("user-message");
    } else {
        div.classList.add("bot-message");
    }

    div.textContent = message;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

    return div;
}


async function sendMessage() {

    const question = userInput.value.trim();

    if (!question) {
        return;
    }


    // Display user's question
    addMessage(question, "user");

    userInput.value = "";


    // Loading message
    const loading = addMessage("Thinking...", "bot");


    try {

        const response = await fetch(
            `${API_BASE_URL}/chat`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: question
                })
            }
        );


        if (!response.ok) {
            throw new Error("Backend error");
        }


        const data = await response.json();


        loading.remove();


        if (data.answer) {

            addMessage(
                data.answer,
                "bot"
            );

        } else {

            addMessage(
                "The CivicLens backend returned an empty response.",
                "bot"
            );
        }


    } catch (error) {

        console.error("Chat error:", error);

        loading.remove();

        addMessage(
            "Unable to connect to the CivicLens AI backend.",
            "bot"
        );
    }
}


if (sendButton) {

    sendButton.addEventListener(
        "click",
        sendMessage
    );

}


if (userInput) {

    userInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage();
            }

        }
    );

}


// =====================================================
// IMAGE UPLOAD / PREVIEW
// =====================================================

const imageInput = document.getElementById("imageInput");
const uploadBtn = document.getElementById("uploadBtn");
const preview = document.getElementById("preview");


if (uploadBtn && imageInput) {

    uploadBtn.addEventListener(
        "click",
        function() {

            imageInput.click();

        }
    );

}


if (imageInput) {

    imageInput.addEventListener(
        "change",
        function() {

            const file = this.files[0];

            if (!file) {
                return;
            }


            if (!file.type.startsWith("image/")) {

                alert(
                    "Please select a valid image."
                );

                this.value = "";

                return;
            }


            const imageURL =
                URL.createObjectURL(file);


            preview.src = imageURL;

            preview.style.display = "block";

        }
    );

}


// =====================================================
// REPORT FORM
// =====================================================

const submitReport =
    document.getElementById("submitReport");

const reportResult =
    document.getElementById("reportResult");


if (submitReport) {

    submitReport.addEventListener(
        "click",
        async function() {

            const issueType =
                document.getElementById("issueType").value;

            const location =
                document.getElementById("location")
                .value
                .trim();

            const description =
                document.getElementById("description")
                .value
                .trim();


            // -----------------------------------------
            // VALIDATION
            // -----------------------------------------

            if (!location) {

                alert(
                    "Please enter the location."
                );

                return;
            }


            if (!description) {

                alert(
                    "Please describe the civic issue."
                );

                return;
            }


            // -----------------------------------------
            // SHOW PROCESSING
            // -----------------------------------------

            submitReport.disabled = true;

            submitReport.textContent =
                "Submitting...";


            reportResult.style.display = "block";

            reportResult.textContent =
                "Submitting your civic report...";


            try {

                /*
                 * The existing CivicLens backend expects
                 * report information through /reports/.
                 *
                 * Image processing will be connected to
                 * the Vision module later.
                 */

                const reportData = {

                    report_id:
                        "REP-" +
                        Date.now(),

                    citizen_id:
                        "CIT-WEB",

                    description:
                        `${issueType}: ${description}`,

                    image_url:
                        null,

                    latitude:
                        null,

                    longitude:
                        null,

                    address:
                        location

                };


                const response = await fetch(
                    `${API_BASE_URL}/reports/`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(
                                reportData
                            )
                    }
                );


                if (!response.ok) {

                    const errorText =
                        await response.text();

                    console.error(
                        "Report API error:",
                        errorText
                    );

                    throw new Error(
                        "Report submission failed"
                    );
                }


                const data =
                    await response.json();


                // -------------------------------------
                // SUCCESS
                // -------------------------------------

                reportResult.innerHTML = `
                    <div class="success-result">

                        <strong>
                            ✓ Report Submitted
                        </strong>

                        <p>
                            Your civic issue has been
                            recorded successfully.
                        </p>

                        <small>
                            Location: ${location}
                        </small>

                    </div>
                `;


                console.log(
                    "Report response:",
                    data
                );


            } catch (error) {

                console.error(
                    "Report submission error:",
                    error
                );


                reportResult.innerHTML = `
                    <div class="error-result">

                        <strong>
                            ✕ Report Submission Failed
                        </strong>

                        <p>
                            Unable to submit the report
                            to the CivicLens backend.
                        </p>

                    </div>
                `;


            } finally {

                submitReport.disabled = false;

                submitReport.textContent =
                    "🚀 Submit Civic Issue";

            }

        }
    );

}