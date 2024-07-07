const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load images and assets
    this.load.image('background', 'path/to/background.png');
    this.load.image('character', 'path/to/character.png');
    this.load.image('enemy', 'path/to/enemy.png');
    this.load.image('bullet', 'path/to/bullet.png');
}

function create() {
    // Create background
    this.add.image(400, 300, 'background');

    // Create player character
    this.player = this.physics.add.sprite(100, 450, 'character').setScale(0.5);
    this.player.setCollideWorldBounds(true);

    // Create enemies group
    this.enemies = this.physics.add.group();

    // Create bullets group
    this.bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10
    });

    // Set up input controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Collision detection between bullets and enemies
    this.physics.add.collider(this.bullets, this.enemies, hitEnemy, null, this);
}

function update() {
    // Player movement
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(200);
    } else {
        this.player.setVelocityX(0);
    }

    if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
        shootBullet.call(this);
    }
}

function shootBullet() {
    const bullet = this.bullets.get(this.player.x, this.player.y - 20);
    if (bullet) {
        bullet.setActive(true);
        bullet.setVisible(true);
        bullet.body.velocity.y = -300;
    }
}

function hitEnemy(bullet, enemy) {
    bullet.destroy();
    enemy.destroy();
    // Update score or other game state changes
}
