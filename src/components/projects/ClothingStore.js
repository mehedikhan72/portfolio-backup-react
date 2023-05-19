import React, { useState } from 'react'
import Images from './Images'

export default function ClothingStore() {
    const [detailsOn, setDetailsOn] = useState(false);
    const images = ['static/p1_1.PNG', 'static/p1_2.PNG', 'static/p1_3.PNG', 'static/p1_4.PNG', 'static/p1_5.PNG', 'static/p1_6.PNG', 'static/p1_7.PNG']

    const toggleDetails = () => {
        setDetailsOn(!detailsOn);
    }
    return (
        <div className='p-5'>
            {!detailsOn && <div>
                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex justify-start items-center text-4'>
                            <i class='bx bxs-folder' ></i>
                            <p className='px-2 py-2'>AjkeKiKorbo</p>
                            <button className='my-btns-2 hidden md:block'>Live</button>
                            <button className='my-btns-2 hidden md:block'>Github</button>
                        </div>
                        <div className='flex justify-start items-center text-4'>
                            <button className='my-btns-2 md:hidden block'>Live</button>
                            <button className='my-btns-2 md:hidden block'>Github</button>
                        </div>

                        <p className='text-2 pb-5'>
                            AjkeKiKorbo is a day planner app which lets you plan your days and complete your tasks easily.
                            It also tracks your progress and shows you how you've been doing.
                            This was my first deployed and production ready app.
                        </p>
                    </div>

                    <div className='w-full xl:w-1/2 flex justify-center items-center'>
                        <Images detailed={false} images={images} />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>View Details</button>
                </div>
            </div>}

            {detailsOn && <div>
                <div className='flex justify-start items-center text-4'>
                    <i class='bx bxs-folder' ></i>
                    <p className='px-2 py-2'>AjkeKiKorbo</p>
                </div>
                <p className='text-2 pb-5'>
                    AjkeKiKorbo is a day planner app which lets you plan your days and complete your tasks easily.
                    It also tracks your progress and shows you how you've been doing.
                    This was my first deployed and production ready app.
                </p>

                <p className='text-3 py-2'>&gt;_Tech Used</p>
                <p className='text-2 pb-5'>Django, Jinja, Vanilla JS, Chart JS, HTML, CSS, Bootstrap, Github.</p>

                <p className='text-3 py-2'>&gt;_Background</p>
                <p className='text-2 pb-5'>
                    November, 22. I had my CS50W course's final project due.
                    I always wanted to make programs that would solve problems, regardless the size of them.
                </p>
                <p className='text-2 pb-5'>
                    So I had been using a diary as my to-do list for almost 2 years and I faced some difficulties
                    with it like forgetting to write down the tasks and so on. There are many todo applications
                    available online but they seemed quite complex but I needed a simpler one. So, to come up with a solution
                    to this problem, I made this app which also served as a final project to the CS50W course.
                </p>

                <p className='text-3 py-2'>&gt;_Functionality</p>
                <p className='text-2 pb-5'>
                    'AjkeKiKorbo'(An English translation would be 'What to do today?') is an app that lets you plan your
                    day(and the next) and help you achieve your goals by keeping track of the tasks that you complete
                    and the tasks that are yet to be completed.You can generalize this as a 'todo' app. However, what
                    makes this better is that this app can track your progress and let you see how you've been doing.
                    There is a reminder feature as well, where you can have as many reminders as you want and the app
                    will show them to you in various pages in a random order. There are some other features as well but
                    they are for you to find out and hopefully more features will be available in the future.
                </p>

                <p className='text-3 py-2'>&gt;_Gallery</p>
                <div>
                    <Images detailed={true} images={images} />
                </div>

                <p className='text-3 py-2'>&gt;_Challenges and What I Learned</p>
                <p className='text-2 pb-5'>
                    There were quite a lot of challenges and I learned a lot honestly from this project.
                    Making this application responsive was one hell of a job. Since this is a todo app and
                    it tracks your progress flawlessly, being accurate with timezones was a hectic challenge
                    for me to overcome. I took leverage of Python's Calender, Datetime, pytz modules to come
                    up with solutions so that anyone, from any timezone can use this app.
                </p>
                <p className='text-2 pb-5'>This was my first time working with graph so it was a good
                    challenge and a lot of fun to be able to implement Chart JS properly.
                </p>
                <p className='text-2 pb-5'>
                    I learned how to make custom 404 error pages. Since this was my first deployed app,
                    I learned so much on databases, deployment and so on. I had to make this app as efficient
                    as possible so users could read from and write to the database without any hassle.
                    This app also welcomes users upon registration via email so I learned to work with
                    environment variables and also 'gitignore' them to make things secure. So I would
                    say my GitHub skills got better as well.
                </p>

                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>Hide Details</button>
                </div>

            </div>}
        </div>
    )
}
