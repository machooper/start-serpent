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
        <label for="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="fe"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label for="E-Mail Address">E-Mail Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className="fe"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label for="Message">Message</label>
        <textarea
          id="message"
          name="message"
          className="fe"
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
        font-size: 16px;
        text-align: center;
        border: 1px solid var(--black);
        margin: .5rem 0;
        background: transparent;
      }
      form textarea {
          height: 150px;
          resize: none;
      }
      form input, form textarea, form button {
          font-family: inherit;
          color: var(--white);
          letter-spacing: inherit;
      }
      form input:focus, form textarea:focus {
      }
			label {
					margin: 1rem 0 .1rem 0;
			}
      form button {
          background: var(--secondary);
          color: var(--black);
          padding: var(--btnpadding);
          min-width: 150px;
          margin: 2rem auto;
        }
      @media(prefers-color-scheme: dark) {
        border: 1px solid var(--white);
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
