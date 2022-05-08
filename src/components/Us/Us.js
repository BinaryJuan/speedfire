import './Us.css'

const Us = () => {
    return (
        <div className='UsContainer'>
            <div className='FlexContainer'>
                <article className='TextContainer'>
                    <h2>Speedfire</h2>
                    <p>
                        Speedfire Games was founded in 1987 and is the creator of the games Fortnite, Unreal, 
                        Gears of War, Shadow Complex and the Infinity Blade series. Speedfire's Unreal Engine 
                        technology brings high-fidelity, interactive experiences to desktop, console, mobile, 
                        AR, VR, and websites. Unreal Engine is available for free at unrealengine.com. 
                        To stay up to date with the latest news from the studio, follow @Speedfire.
                    </p>
                </article>
            </div>
            <div className='FlexContainer'>
                <article className='TextContainer'>
                    <h2>Our facilities</h2>
                    <p>
                        Our team designs and maintains the surroundings that energize and inspire us. We handle 
                        state-of-the-art green construction projects in London, maintenance of Mountain View’s 
                        resident T. Rex skeleton, and supervision of food services programs in Singapore. Pushing 
                        the boundaries of what’s possible in a workspace, we set modern standards for workplace 
                        innovation and productivity.
                    </p>
                </article>
            </div>
            <div className='FlexContainer'>
                <article className='TextContainer'>
                    <h2>Wanna work here?</h2>
                    <p>
                        We are open to any application for the job position of Frontend and Backend developer,
                        videogame programming, and Database administrator. Be our guest and try to apply a job
                        via <a style={{color: "blue"}} href=''>this form</a>!
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Us