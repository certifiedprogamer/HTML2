document.getElementById("shatterImage").addEventListener("click", function () {
    const image = this;
    
    // The new image to be used for the shattered pieces
    const shardImage = './resources/melonslice.jpg'; // Replace with your image URL

    // Create the shattering effect
    for (let i = 0; i < 50; i++) {
        const shard = document.createElement('div');
        shard.style.position = 'absolute';
        shard.style.width = `${Math.random() * 50 + 20}px`;
        shard.style.height = `${Math.random() * 50 + 20}px`;
        shard.style.background = `url(${shardImage}) no-repeat center center`;
        shard.style.backgroundSize = 'cover';
        shard.style.top = `${Math.random() * 300}px`;
        shard.style.left = `${Math.random() * 300}px`;
        shard.classList.add('shatter');
        image.parentElement.appendChild(shard);

        // Apply random movement to simulate the shattering effect
        shard.style.animationDelay = `${Math.random() * 0.5}s`;
        shard.style.animation = `shatterAnimation ${Math.random() * 1 + 1}s forwards`;

        // Remove shards after the animation ends
        shard.addEventListener("animationend", function() {
            shard.remove();
        });
    }

    // Hide the original image after the click
    image.style.opacity = '0';
});