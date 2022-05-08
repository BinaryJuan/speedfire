import './Help.css'

const Help = () => {
    return (
        <div className='faqContainer'>
            <div className='c'>
                <input className='input-faq' type='checkbox' id='faq-1' />
                <h2 className='h1-faq'><label className='label-faq' htmlFor='faq-1'>What platforms do we support?</label></h2>
                <div className='p'>
                    <p>
                        The Speedfire Store is currently only available for PC and Mac. You can check platform compatibility
                        for individual titles by checking the "Specifications" section of any product page.
                    </p>
                </div>
            </div>
            <div className='c'>
                <input className='input-faq' type='checkbox' id='faq-2' />
                <h2 className='h1-faq'><label className='label-faq' htmlFor='faq-2'>Free games?</label></h2>
                <div className='p'>
                    <p>
                        Speedfire will offer a new free game available every week throughout 2022. When you claim a free game,
                        it's yours forever, even after the game is no longer available to new customers for free.
                    </p>
                </div>
            </div>
            <div className='c'>
                <input className='input-faq' type='checkbox' id='faq-3' />
                <h2 className='h1-faq'><label className='label-faq' htmlFor='faq-3'>How do refunds work in the Speedfire Store?</label></h2>
                <div className='p'>
                    <p>
                        All games can be refunded for any reason within 14 days of purchase, provided they have been played for
                        less than 2 hours. You will not be eligible for refunds for games in which you have been banned or whose
                        Terms of Service you have violated.
                    </p>
                </div>
            </div>
            <div className='c'>
                <input className='input-faq' type='checkbox' id='faq-4' />
                <h2 className='h1-faq'><label className='label-faq' htmlFor='faq-4'>Does the Speedfire Store support regional pricing?</label></h2>
                <div className='p'>
                    <p>
                        Yes, we support regional pricing in 190+ countries and 30+ territories.
                        We also have a set of suggested regional discounts for developers based on local 
                        regulations that are reviewed periodically.
                    </p>
                </div>
            </div>
            <div className='c'>
                <input className='input-faq' type='checkbox' id='faq-5' />
                <h2 className='h1-faq'><label className='label-faq' htmlFor='faq-5'>How can I contact the support team?</label></h2>
                <div className='p'>
                    <p>
                        You can contact our support team via this email: speedfire@support.com. We also recommend checking out our help center articles,
                        which may answer some of your questions or help you resolve issues.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Help