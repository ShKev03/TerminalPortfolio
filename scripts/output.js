const lsHome = [
    `
        <div class="directory">
            <p class="comment">
            # list of files and directories in the current directory
            </p>
            <a class="folder" onclick="changePathButton('~/projects')"> projects/ </a>
            <a class="folder" onclick="changePathButton('~/skills')"> skills/ </a>
            <a class="files"> about.me </a>
            <a class="files"> banner.txt </a>

        </div>
    `,
];

const lsProjects = [
    `
        <div class="directory">
            <p class="comment">
            # list of files and directories in the current directory
            </p>
            <pre><a class=folder target="_blank" href="https://amazon-gray.vercel.app/">amazon-clone/</a>     NextJS, Tailwind</pre>
            <pre><a class=folder target="_blank" href="https://github.com/shkev03/zoom">zoom-clone/ </a>      NodeJS, Socket</pre>
            <pre><a class=folder target="_blank" href="https://github.com/shkev03/whatschat">whatsapp-clone/</a>   ReactJS, Firebase</pre>
            <pre><a class=folder target="_blank" href="https://github.com/shkev03/instagram">instagram-clone/</a>  ReactNative, Firebase</pre>
            <pre><a class=folder target="_blank" href="https://github.com/shkev03/facebook">facebook-clone/</a>   NextJS, AWS amplify</pre>
        </div>
    `,
];

const help = [
    `   
        <div class="comment"># available commands (basic)</div>
        <pre>help           prints all available commands </pre>
        <pre>sudo           give u root privilages </pre>
        <pre>whoami         prints more about me </pre>
        <pre>ls             lists all available files and directories</pre>
        <pre>cd             changes the current directory</pre>
        <pre>pwd            prints the current working directory</pre>
        <pre>clear          clears the terminal output</pre>
        <pre>cat            reads the files and prints them</pre>
        <pre>gui            opens a GUI portfolio site </pre>
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
        <pre><a class="files" href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>     Web applications</pre>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/Batch_file">Batch</a>          Scripting, Hacking</pre>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a>         Machine Learning, Scripting, Hacking</pre>
        <pre class="hidden">_</pre>
        <div class="comment"># Web Fameworks and Technologies</div>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/Node.js">NodeJS</a>         Backend Framework</pre>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">ReactJS</a>        Frontend Framework</pre>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/React_Native">ReactNative</a>    Cross-platform Framework</pre>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/Next.js">NextJS</a>         Frontend Framework</pre>
        <pre class="hidden">_</pre>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/Firebase">Firebase</a>       PaaS</pre>
        <pre><a class="files" href="https://en.wikipedia.org/wiki/Amazon_Web_Services">AWS</a>            PaaS</pre>
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

PenguinBanner = [
    `
    <pre>

 _____________________________________
|      I am <strong>Keval Shah</strong>. i am 17,      |
|     based in Maharashtra, India.    |
 -------------------------------------
         o  
            o    .--.
                |o_o | 
                |:_/ |
               //   \\ \\
              (|     | )
             /'\\_   _/ \\
             \\___)=(___/

    </pre>
`,
    `
    <pre>
 _____________________________________
|      I am <strong>Keval Shah</strong>. i am 17,      |
|     based in Maharashtra, India.    |
 -------------------------------------
          o
            o  _____
              / ()  \\         
             _|_____|_       
            | | === | |      
            |_|  O  |_|      
             ||  O  ||          
             ||__*__||          
            |~ \\___/ ~|         
            /=\\ /=\\ /=\\         
   _________[_]_[_]_[_]________
    </pre>
`,
];

sudoer = [
    `
    <pre>

 ______________________________________
|   Nice try, but you're still just    |
|              a muggle.               |
 --------------------------------------
          o  
            o    .--.
                |o_o |
                |:_/ |
               //   \\ \\
              (|     | )
             /'\\_   _/ \\
             \\___)=(___/

    </pre>
`,
    `
    <pre>
 ______________________________________
|       Access Denied! Sorry, but      |
|   the Force is not strong with you   |
 --------------------------------------
          o
            o  _____
              / ()  \\         
             _|_____|_       
            | | === | |      
            |_|  O  |_|      
             ||  O  ||          
             ||__*__||          
            |~ \\___/ ~|         
            /=\\ /=\\ /=\\         
   _________[_]_[_]_[_]________
    </pre>
`,
];
