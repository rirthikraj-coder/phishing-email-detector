function analyzeEmail(){

    let email =
        document.getElementById("emailText")
        .value.toLowerCase();

    let score = 0;

    let suspiciousWords = [
        "urgent",
        "verify",
        "bank",
        "account",
        "password",
        "click here",
        "login",
        "winner",
        "claim prize",
        "update details"
    ];

    let findings = [];

    suspiciousWords.forEach(word => {

        if(email.includes(word)){
            score++;
            findings.push(word);
        }

    });

    let urlPattern =
        /(https?:\/\/[^\s]+)/g;

    let urls =
        email.match(urlPattern);

    if(urls){
        score += urls.length;
    }

    let result =
        document.getElementById("result");

    if(score >= 3){

        result.innerHTML = `
        <h2 class="phishing">
        ⚠️ Phishing Email Detected
        </h2>

        <p>
        Suspicious Keywords:
        ${findings.join(", ")}
        </p>

        <p>
        Risk Score: ${score}
        </p>
        `;

    } else {

        result.innerHTML = `
        <h2 class="safe">
        ✅ Safe Email
        </h2>

        <p>
        Risk Score: ${score}
        </p>
        `;
    }
}
