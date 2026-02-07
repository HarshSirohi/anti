document.addEventListener('DOMContentLoaded', () => {
    const roses = document.querySelectorAll('.rose-item');
    const modal = document.getElementById('message-modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close-btn');
    const bgMusic = document.getElementById('bg-music');

    // Messages for each rose
    // Messages for each rose
    const fixedMessages = {
        1: `For my Riya,
        
"Chahe raho door ya paas,
Tumhari khushi hai mere liye khaas.
Zindagi mein har manzil mile tumhe,
Success chuve tumhare kadam har baar."

I want you to be happy always, no matter where you are. 💖`,

        4: `My Dream,

"Bas ek hi sapna hai meri aankhon mein,
Tum meri dulhan bano in sitaron ki chaon mein.
Wo nanhi si jaan jo humein papa-mamma pukare,
Bas yahi duniya chahiye mujhe tumhare sahare."

Will you be mine forever? 💍`
    };

    const dynamicMessages = {
        a: `A Promise,

"Tere haath mein mera haath ho,
Zindagi bhar tera saath ho.
Log chahe kuch bhi kahe,
Bas tu hi meri puri kaaynaat ho."

Happy Rose Day! 🌹`,

        b: `Mere Dil Ki Baat,

"Phool khilte hain, khil kar bikhar jaate hain,
Par tumhari yaad mein hum nikharr jaate hain.
Sirf Rose Day nahi, har din tumhara hai,
Kyunki tumse hi jurra mera har kinara hai."

My love for you grows every single day. ❤️`
    };

    // Initialize Background Effects
    createHeartBackground();
    startPetalRain();

    // Handle Rose Clicks
    roses.forEach(rose => {
        rose.addEventListener('click', () => {
            const id = rose.getAttribute('data-id');
            let messageToShow = "";

            if (id === '1' || id === '4') {
                messageToShow = fixedMessages[id];
            } else {
                // Dynamic logic for Rose 2 and 3
                const currentMinute = new Date().getMinutes();
                if (currentMinute % 2 === 0) {
                    messageToShow = dynamicMessages.a;
                } else {
                    messageToShow = dynamicMessages.b;
                }
            }

            showModal(messageToShow);

            // Try playing music on first interaction
            bgMusic.play().catch(() => { });
        });
    });

    // Modal Functions
    function showModal(text) {
        modalText.innerHTML = ""; // Clear previous
        modal.classList.remove('hidden');
        typeWriter(text, modalText);
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Typewriter Effect
    function typeWriter(text, element, speed = 40) {
        let i = 0;
        element.innerHTML = "";
        function type() {
            if (i < text.length) {
                if (text.charAt(i) === '\n') {
                    element.innerHTML += '<br>';
                } else {
                    element.innerHTML += text.charAt(i);
                }
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Falling Petals
    function startPetalRain() {
        setInterval(createPetal, 400);
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('falling-petal');
        const startLeft = Math.random() * window.innerWidth;
        const animationDuration = Math.random() * 3 + 3 + 's';
        const size = Math.random() * 10 + 10 + 'px';

        petal.style.left = startLeft + 'px';
        petal.style.animationDuration = animationDuration;
        petal.style.width = size;
        petal.style.height = size;

        const colors = ['#D2042D', '#FF007F', '#FF66CC', '#E30B5D'];
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(petal);

        setTimeout(() => { petal.remove(); }, 6000);
    }

    // Floating Hearts Background
    function createHeartBackground() {
        const container = document.querySelector('.bg-hearts');
        const heartCount = 20;

        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart-bg');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 10 + 10 + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(heart);
        }
    }
});
