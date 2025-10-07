/*para musica*/
    window.addEventListener("DOMContentLoaded", () => {
        const audio = document.getElementById("bg-music");
        const muteBtn = document.getElementById("muteBtn");
        const modal = document.getElementById("musicModal");
        const modalBox = document.getElementById("modalBox");
        const acceptBtn = document.getElementById("acceptMusic");
        const declineBtn = document.getElementById("declineMusic");

        audio.volume = 0.5;
        audio.muted = true;

        

        // Mostrar modal con animación
        setTimeout(() => {
            modal.classList.remove("opacity-0", "pointer-events-none");
            modal.classList.add("opacity-100");
            modalBox.classList.remove("scale-95");
            modalBox.classList.add("scale-100");
        }, 300);

        // Función para cerrar el modal con animación
        function cerrarModal() {
            modal.classList.remove("opacity-100");
            modal.classList.add("opacity-0", "pointer-events-none");
            modalBox.classList.remove("scale-100");
            modalBox.classList.add("scale-95");
        }

        // Si acepta música
        acceptBtn.addEventListener("click", () => {
            audio.muted = false;
            audio.play();
            muteBtn.textContent = "🔊";
            cerrarModal();
        });

        // Si rechaza música
        declineBtn.addEventListener("click", () => {
            audio.muted = true;
            muteBtn.textContent = "🔇";
            cerrarModal();
        });

        // Botón flotante para controlar música
        muteBtn.addEventListener("click", () => {
            if (audio.muted) {
            audio.muted = false;
            audio.play();
            muteBtn.textContent = "🔊";
            } else {
            audio.muted = true;
            muteBtn.textContent = "🔇";
            }
        
        
    });

    /**
     * Contador regresivo para el Baby Shower
     * Actualiza cada segundo hasta la fecha del evento
     */
        // Fecha del baby shower
        const partyDate = new Date('2025-11-08T18:30:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = partyDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "¡Es Hoy! ¡Te esperamos!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const formatTime = (time) => (time < 10 ? "0" + time : time);

            document.getElementById("days").innerHTML = formatTime(days);
            document.getElementById("hours").innerHTML = formatTime(hours);
            document.getElementById("minutes").innerHTML = formatTime(minutes);
            document.getElementById("seconds").innerHTML = formatTime(seconds) ;
        }

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);

    });





