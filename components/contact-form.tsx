"use client"

export function ContactForm() {
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-2">
        <label className="font-[var(--font-headline)] font-bold tracking-widest text-xs uppercase" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-[var(--font-headline)] font-bold tracking-widest text-xs uppercase" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-[var(--font-headline)] font-bold tracking-widest text-xs uppercase" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-white text-black font-[var(--font-headline)] font-bold tracking-widest uppercase py-4 px-12 hover:bg-accent hover:text-white transition-colors duration-0"
      >
        Enviar
      </button>
    </form>
  )
}
