import { useState } from "react"

const Contact = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <div className="contact">
            <div className="contact-white group">
                <div className="content group-hover:h-[100px] group-hover:rounded-none">
                    Keep Exploring!
                </div>
            </div>
            <div className={`contact-black group ${showForm ? '' : 'h-[100vw]'}`}>
                {
                    showForm ? (
                        <div className="contact-form">
                            <div className="arrow" onClick={() => setShowForm(!showForm)}>
                                &#8619;
                            </div>
                            <form action="" className="flex flex-col gap-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your name" />

                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" placeholder="Your Email" />

                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>

                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    ) : (
                        <div className="content group-hover:h-[100px] group-hover:rounded-none" onClick={() => setShowForm(!showForm)}>
                            Or say Hi!
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Contact