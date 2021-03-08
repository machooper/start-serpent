import {useState} from "react"
export default function ContactForm() {
  const [form, setForm] = useState({name: '', email: '', message: '', sent: false, buttonText: "Send", err:''})
  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    });
  }
  function sendForm(e) {
    e.preventDefault()
    var fe = document.getElementsByClassName("fe")
    for (var i = 0; i < fe.length; i++) {
      fe[i].classList.add("fechange")
    }
    setForm({
      ...form,
      buttonText: "Sent",
    })
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    }).then((res) => {
      console.log('Fetch: ', res)
    })
  }
  return (
  <>
    <form>
        <input
          id="name"
          name="name"
          type="text"
          className="fe"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          id="email"
          name="email"
          type="email"
          className="fe"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          name="message"
          className="fe"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <div style={{margin: '0 auto', width: '150'}}>
        <button type="submit" onClick={sendForm}>{form.buttonText}</button>
        </div>
      </form>

      <style jsx>{`
      form {
      display: flex;
      flex-direction: column;
      }
      form input, form textarea {
        border-radius: var(--radius);
        width: 80vw;
        height: 50px;
        text-align: center;
        border: 1px solid var(--grey);
        margin: .5rem 0;
      }
      form textarea {
          height: 150px;
          resize: none;
      }
      form input, form textarea, form button {
          font-family: inherit;
          font-weight: 400;
          color: var(--black);
          letter-spacing: inherit;
      }
      form input:focus, form textarea:focus {
        box-shadow: var(--shadow);
      }
      ::placeholder {
          color: var(--black);
          opacity: 1;
      }
      form button {
          min-width: 180px;
          margin-top: 2rem;
          background: transparent;
          border: 1px solid var(--grey);
          box-shadow: none;
      }
      form button:hover {
          border: 1px solid var(--black);
        }
        .fe {
          box-shadow: none;
        }
        .fechange {
          background: var(--success);
          font-size: 0;
        }
      @media(min-width: 760px) {
          form input, form textarea {
              width: 450px;
            }
          }
      @media(min-width: 1110px) {
        form {
          padding-bottom: 5rem;
        }
      }
      @media(min-width: 1360px) {
        form {
          padding-bottom: 5rem;
        }
      }¡
      `}</style>
    </>
  )
}
