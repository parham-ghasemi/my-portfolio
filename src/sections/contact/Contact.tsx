import { useRef, useState } from "react"
import * as emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import MacTerminal from "../../components/MacTerminal";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<{ name: string, email: string, message: string }>({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  // 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_wykweod',
        'template_2ij4olo',
        {
          from_name: form.name,
          to_name: 'Parham',
          from_email: form.email,
          to_email: 'parham.ghasemi.1388@gmail.com',
          message: form.message
        },
        'UetaoKpAmDRX0xE0u'
      )

      toast.success('Email Sent')
      setLoading(false)
    } catch (error: any) {
      toast.error('Problem Sending Email :( \ntry again later.')
      console.error(error);
      setLoading(false)
    }

  }

  return (
    <section className="c-space my-20" id='contact'>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img src="/assets/terminal.png" alt="terminal-background" className="absolute inset-0 min-h-screen" /> */}
        <MacTerminal>
          <div className="my-5 contact-container">
            <h3 className="head-text">Send me an e-mail!</h3>
            <p className="text-lg text-white-600 mt-3">Whether you want to build a new platform, imrove your existing website or bring a new project to life I'm here to help.</p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
              <label className="space-y-3">
                <span className="field-label">Full name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="John Doe" />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="example@gmail.com" />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your Message</span>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi, ..." />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </form>
          </div>
        </MacTerminal>
      </div>
    </section>
  )
}

export default Contact