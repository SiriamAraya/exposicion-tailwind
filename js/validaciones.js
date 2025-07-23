  const form = document.getElementById('contactForm');
  const nombre = form.nombre;
  const email = form.email;
  const mensaje = form.mensaje;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;

    // Reset mensajes
    document.getElementById('error-nombre').classList.add('hidden');
    document.getElementById('error-email').classList.add('hidden');
    document.getElementById('error-mensaje').classList.add('hidden');
    document.getElementById('formSuccess').classList.add('hidden');

    // Validar nombre
    if (!nombre.value.trim()) {
      document.getElementById('error-nombre').classList.remove('hidden');
      valid = false;
    }

    // Validar email (simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      document.getElementById('error-email').classList.remove('hidden');
      valid = false;
    }

    // Validar mensaje
    if (!mensaje.value.trim()) {
      document.getElementById('error-mensaje').classList.remove('hidden');
      valid = false;
    }

    if (valid) {
      // Aquí podrías enviar el formulario, por ejemplo con fetch o Ajax
      document.getElementById('formSuccess').classList.remove('hidden');
      form.reset();
    }
  });

  // Función para activar modo oscuro o claro
    function setDarkMode(isDark) {
      const body = document.body;
      const btn = document.getElementById('btnToggleDark');

      if (isDark) {
        body.classList.remove('bg-gradient-light');
        body.classList.add('bg-gradient-dark', 'dark');
        btn.textContent = 'Modo Claro';
        btn.classList.remove('bg-secondary');
        btn.classList.add('bg-accent', 'text-black');
      } else {
        body.classList.remove('bg-gradient-dark', 'dark');
        body.classList.add('bg-gradient-light');
        btn.textContent = 'Modo Oscuro';
        btn.classList.remove('bg-accent', 'text-black');
        btn.classList.add('bg-secondary');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      const btnToggle = document.getElementById('btnToggleDark');

      // Cargar preferencia guardada o usar el modo claro por defecto
      const savedMode = localStorage.getItem('modoOscuro') === 'true';

      setDarkMode(savedMode);

      // Cambiar modo al presionar el botón
      btnToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark');
        setDarkMode(!isDark);
        localStorage.setItem('modoOscuro', !isDark);
      });
    });