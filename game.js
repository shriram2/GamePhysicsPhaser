
    var config = {
        type: Phaser.AUTO,
        width: 600,
        height: 500, backgroundColor: 0x27ae60,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {

     this.load.image('boy', 'asset/boy.png');
    this.load.image('bomb', 'asset/bomb.png');

    }

    function create ()
    {

    this.add.image(400, 300, 'boy');
    this.add.image(300, 300, 'bomb');
    }

    function update ()
    {
    }
