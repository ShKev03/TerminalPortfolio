const lsHome = [
    `
        <div class="directory">
            <p class="comment">
            # list of files and directories in the current directory
            </p>
            <a class="folder" onclick="changePathButton('~/projects')"> projects/ </a>
            <a class="folder" onclick="changePathButton('~/skills')"> skills/ </a>
            <a class="file"> about.me </a>
            <a class="file"> banner.txt </a>

        </div>
    `,
];

const lsProjects = [
    `
        <div class="directory">
            <p class="comment">
            # list of files and directories in the current directory
            </p>
            <a href="https://amazon-gray.vercel.app/" target="_blank" class="folder">
                amazon-clone/
                <div class="tech">
                    <p class="comment">-> NextJS</p>
                    <p class="comment">-> Tailwind</p>
                </div>
            </a>
            <a href="https://github.com/shkev03/zoom" target="_blank" class="folder">
                zoom-clone/
                <div class="tech">
                    <p class="comment">-> Node</p>
                    <p class="comment">-> Socket</p>
                </div>
             </a>
            <a href="https://github.com/shkev03/whatschat" target="_blank" class="folder">
                whatsapp-clone/
                <div class="tech">
                    <p class="comment">-> React</p>
                    <p class="comment">-> Firebase</p>
                </div>
            </a>
            <a href="https://github.com/shkev03/instagram" target="_blank" class="folder">
                instagram-clone/
                <div class="tech">
                    <p class="comment">-> ReactNative</p>
                    <p class="comment">-> Firebase</p>
                </div>
            </a>
            <a href="https://github.com/shkev03/facebook" target="_blank" class="folder">
                facebook-clone/
                <div class="tech">
                    <p class="comment">-> NextJS</p>
                    <p class="comment">-> Firebase</p>
                </div>
            </a>
        </div>
    `,
];

const help = [
    `   
        <div class="comment"># available commands (basic)</div>
        <pre>ls             lists all available files and directories</pre>
        <pre>cd             changes the current directory</pre>
        <pre>pwd            prints the current working directory</pre>
        <pre>clear          clears the terminal output</pre>
        <pre>cat            reads the files and prints them</pre>
        <pre>whoami         prints more about me </pre>
        <pre>help           prints all available commands </pre>
        <pre class="hidden">_</pre>
        <div class="comment"># additional commands (to contact me)</div>
        <pre>pingme         opens gmail in new tab</pre>
        <pre>email          opens default email client</pre>
        <pre>instagram      opens my instagram page in new tab</pre>
        <pre>github         opens my github page in new tab</pre>
        <pre>x              opens my x.com page in new tab</pre>
    `,
];

const lsSkills = [
    `   
        <div class="comment"># Programming Languages</div>
        <pre>JavaScript     Web applications</pre>
        <pre>Batch          Scripting, Hacking</pre>
        <pre>Python         Machine Learning, Scripting, Hacking</pre>
        <pre class="hidden">_</pre>
        <div class="comment"># Web Fameworks and Technologies</div>
        <pre>NodeJS         Backend Framework</pre>
        <pre>ReactJS        Frontend Framework</pre>
        <pre>ReactNative    Cross-platform Framework</pre>
        <pre>NextJS         Frontend Framework</pre>
        <pre class="hidden">_</pre>
        <pre>Firebase       PaaS</pre>
        <pre>AWS            PaaS</pre>
    `,
];

const contact = [
    `   
        <div class="comment"># Contact me </div>
        <pre>email01          keval.jignesh.shah@gmail.com</pre>
        <pre>email02          shkev03@gmail.com</pre>
        <pre>Github           @shkev03</pre>
        <pre>Instagram        @shkev03</pre>
        <pre>X.com            @shkev03</pre>
        <pre>Discord          @shkev03</pre>
    `,
];

const introduction = [
    `
        <div class="hidden">_</div>
        <p class="introduction">
            I am <strong>Keval Shah</strong>.
        </p>
        <div class="hidden">_</div>
        <p class="whoami">
            I specialize in <b>software development</b> and <b>cybersecurity</b>, aiming to create <b class="highlight-white">innovative apps</b> and understand the <b class= "highlight-white">complexities of hacking</b>. With a strong foundation in coding and a keen eye for <b class="highlight-white">detail</b>, I excel in <b class="highlight-white">problem-solving</b> and enhancing <b class="highlight-white"> security measures</b>.
        </p>
        <p class="whoami">
            My <b>goal</b> is to contribute to projects that advance <b class= "highlight-white">technology</b> while ensuring <b class= "highlight-white">secure user experiences</b>. I enjoy learning new <b class= "highlight-white">technologies</b> and collaborating with others to develop effective <b class= "highlight-white">solutions</b>.
        </p>
        <div class="hidden">_</div>
    `,
];

const banner = [
    `
        <pre class="banner">

        
#   #  ##### #     #      ###    ##
#   #  #     #     #     #   #   ##
#   #  #     #     #     #   #   ##
#####  ####  #     #     #   #   ##    
#   #  #     #     #     #   #   ##
#   #  #     #     #     #   #
#   #  ##### ##### #####  ###    ##
___________________________________

I am <strong>Keval Shah</strong>,
16 years old.
___________________________________

based in <strong>Maharashtra, India</strong>

        </pre>
    `,
];
