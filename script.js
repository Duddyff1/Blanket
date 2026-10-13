// Game State & Inventory
let coins = 500;
let inventory = ['🐱 Cat', '🐶 Dog']; // Starter blooks

const allBlankies = [
    { name: '🐱 Cat', rarity: 'Common', pack: 'Starter' },
    { name: '🐶 Dog', rarity: 'Common', pack: 'Starter' },
    { name: '🦈 Shark', rarity: 'Epic', pack: 'Ocean' },
    { name: '🐙 Octopus', rarity: 'Epic', pack: 'Ocean' },
    { name: '🚀 Alien', rarity: 'Legendary', pack: 'Galaxy' },
    { name: '⭐ Star', rarity: 'Legendary', pack: 'Galaxy' }
];

// Switch Tabs
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    if(tabId === 'admin-panel') {
        document.getElementById('tab-admin-panel').classList.add('active');
    } else {
        document.getElementById(`tab-${tabId}`).classList.add('active');
    }
}

// Update Coin Display
function updateCoins() {
    document.getElementById('coin-count').innerText = coins;
}

// Render Inventory
function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';
    inventory.forEach(blook => {
        const card = document.createElement('div');
        card.className = 'blook-card';
        card.innerHTML = `<h3>${blook}</h3>`;
        grid.appendChild(card);
    });
}

// Open Pack Logic
function openPack(packName, cost) {
    if(coins < cost) {
        alert("Not enough coins!");
        return;
    }
    coins -= cost;
    updateCoins();

    const packItems = allBlankies.filter(b => b.pack === packName);
    const won = packItems[Math.floor(Math.random() * packItems.length)];
    
    inventory.push(won.name);
    renderInventory();

    document.getElementById('unboxed-result').innerText = won.name;
    document.getElementById('pack-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('pack-modal').classList.add('hidden');
}

// Admin Panel Verification
function verifyAdmin() {
    const passcode = document.getElementById('admin-pass-input').value;
    if(passcode === 'StarsAreCool') {
        switchTab('admin-panel');
    } else {
        alert("Incorrect passcode! Hint: StarsAreCool");
    }
}

// Admin Cheats
function adminAddCoins() {
    coins += 10000;
    updateCoins();
    alert("Added 10,000 coins!");
}

function adminUnlockAll() {
    inventory = allBlankies.map(b => b.name);
    renderInventory();
    alert("Unlocked every Blankie!");
}

// Trivia Gameplay Mock
function startTriviaGame(modeName) {
    document.getElementById('game-mode-title').innerText = modeName;
    switchTab('play');
    loadQuestion();
}

const sampleQuestions = [
    { q: "What color is the sky on a clear day?", answers: ["Blue", "Red", "Green", "Yellow"], correct: 0 },
    { q: "What is 5 + 5?", answers: ["10", "12", "8", "9"], correct: 0 }
];

function loadQuestion() {
    const qObj = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
    document.getElementById('question-text').innerText = qObj.q;
    
    const container = document.getElementById('answers-container');
    container.innerHTML = '';

    const highlightEnabled = document.getElementById('cheat-highlight').checked;
    const autoAnswerEnabled = document.getElementById('cheat-auto-answer').checked;

    qObj.answers.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerText = ans;
        
        if(highlightEnabled && index === qObj.correct) {
            btn.classList.add('highlight-correct');
        }

        btn.onclick = () => {
            if(index === qObj.correct) {
                alert("Correct! 🎉");
                coins += 50;
                updateCoins();
            } else {
                alert("Incorrect! ❌");
            }
            loadQuestion();
        };

        container.appendChild(btn);
    });

    if(autoAnswerEnabled) {
        setTimeout(() => {
            alert("[Auto Answer Cheat] Answered correctly automatically!");
            coins += 50;
            updateCoins();
            loadQuestion();
        }, 1000);
    }
}

// Initialize
renderInventory();
