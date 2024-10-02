// this script contains automated scripts for nav buttons

const input = document.getElementById("input");

const auto = (cmd, timeout) => {
    input.style.display = "none";
    changePath("~/");
    output.innerHTML = "";
    processor(
        `<div class="help-log comment">
            Enter <b class="command">'help'</b> command to know
            the available commands.
        </div>`
    );
    if (cmd === "home") {
        processor(
            `<div class="prompt"><p class="user">keval@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">cat banner.txt</div></div>`
        );
    } else if (cmd === "about") {
        processor(
            `<div class="prompt"><p class="user">keval@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">whoami</div></div>`
        );
    } else if (cmd === "work") {
        processor(
            `<div class="prompt"><p class="user">keval@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">ls ./projects</div></div>`
        );
    } else if (cmd === "contact") {
        processor(
            `<div class="prompt"><p class="user">keval@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">pingme</div></div>`
        );
    }
    setTimeout(() => {
        const typing = document.getElementById("typing");
        typing.classList.remove("typing");
        if (cmd === "home") {
            processor(banner);
        } else if (cmd === "about") {
            processor(introduction);
        } else if (cmd === "work") {
            processor(lsProjects);
        } else if (cmd === "contact") {
            processor("Opening Gmail on web browser ...");
            setTimeout(
                () =>
                    window
                        .open(
                            "https://mail.google.com/mail/?view=cm&fs=1&to=keval.jignesh.shah@gmail.com",
                            "_blank"
                        )
                        .focus(),
                500
            );
        }
        setTimeout(() => (input.style.display = "flex"), 400);
    }, 2100);
    focusInput();
};
