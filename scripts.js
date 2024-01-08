document.getElementById('show-specs-btn').addEventListener('click', function () {
    var specsSection = document.getElementById('specs');
    specsSection.classList.toggle('hidden');
});

// Adicionando um evento de clique para a Placa de Vídeo (GPU)
document.getElementById('gpu-spec').addEventListener('click', function () {
    var gpuImage = document.getElementById('gpu-image');
    gpuImage.classList.toggle('hidden');
});
