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
        
        const countdown = document.getElementById("countdown");
        const countdownTitle = document.getElementById("countdownTitle");
        const countdownContainer = document.getElementById("countdownContainer");
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        // ✅ Fecha del evento
        const partyDate = new Date('2025-11-08T18:30:00').getTime();
        //para pruebas
        //const partyDate = new Date().getTime() - 1000;


        let countdownInterval;

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = partyDate - now;

            if (distance <= 0) {
                clearInterval(countdownInterval);
                //ocultar titulo
                document.getElementById("countdownTitle").style.display = "none";
                //mostrar mensaje
                countdown.innerHTML = "¡Es Hoy! ¡Te esperamos!";
                // 🎯 Activar confeti solo si el contador entra en pantalla
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

                        const confetiInterval = setInterval(() => {
                        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
                        }, 1000);

                        setTimeout(() => clearInterval(confetiInterval), 4000);
                    }
                    });
                }, { threshold: 0.5 });

                observer.observe(countdownContainer);
                return;
            }

            //actualizacion del tiempo
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const formatTime = (time) => (time < 10 ? "0" + time : time);

            daysEl.textContent = formatTime(days);
            hoursEl.textContent = formatTime(hours);
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
        }

        
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();

    });

    





