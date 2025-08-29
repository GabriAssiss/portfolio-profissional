import { useState } from "react";

const baseUrl = "https://portfolio-profissional-isfp.vercel.app/send-email"

function EmailSender({ translate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus(translate === "ptbr" ? "Mensagem enviada!" : "Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(translate === "ptbr" ? "Erro ao enviar." : "Error sending.");
      }
    } catch (error) {
      console.error(error);
      setStatus(translate === "ptbr" ? "Erro no servidor." : "Server error.");
    }
  };

  return (
    <section className="2xl:w-auto w-screen h-full m-20 text-white">
      <h1 className="flex justify-center text-2xl">
        {translate === "ptbr" ? "Me envie uma mensagem!" : "Send me a message!"}
      </h1>
      <form
        className="bg-[#4C008B] mt-10 pt-10 rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex mt-10 gap-10 px-20">
          <div className="flex flex-col w-1/2">
            <label htmlFor="name">{translate === "ptbr" ? "Nome" : "Name"}</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#8400F1] p-2 rounded-md mt-2"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="email">{translate === "ptbr" ? "Endereço de Email" : "Email Address"}</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#8400F1] p-2 rounded-md mt-2"
              required
            />
          </div>
        </div>
        <div className="mx-20 py-10 flex flex-col">
          <label htmlFor="message">{translate === "ptbr" ? "Mensagem" : "Message"}</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-[#8400F1] p-2 rounded-md mt-2 h-32 resize-none"
            required
          />
        </div>
        <div className="flex justify-center pb-10">
          <button
            type="submit"
            className="bg-[#8400F1] hover:bg-purple-700 px-6 py-2 rounded-xl font-bold transition"
          >
            {translate === "ptbr" ? "Enviar" : "Submit"}
          </button>
        </div>
      </form>

      {status && <p className="text-center mt-4">{status}</p>}
    </section>
  );
}

export default EmailSender;
