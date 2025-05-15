import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import CounterComponent from '../components/CounterComponent';
import { IRootState } from '../store';

const Aboutus = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>About Us | Rama Group – Empowering Your Business Growth in Middle East</title>
            </Head>
            <div className="">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>About Us</h6>
                                <h4 className="!text-white">About Rama Group</h4>
                            </div>
                            <div className="relative mt-6 md:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000"></div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white/[56%] to-white/0 py-14 dark:!bg-none lg:py-[100px]">
                <CounterComponent title="Company Facts" />
            </section>

            <section className="relative pt-14 lg:pb-48 lg:pt-[100px]">
                <div className="container relative z-[1]">
                    <div className="text-center lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                            <h6>Who are we?</h6>
                            <h4>Empowering Businesses with Creative & Strategic Excellence</h4>
                        </div>
                        <p className="pb-10 text-lg font-semibold leading-[30px]">
                            At Rama Group, we blend innovation, strategy, and technology to deliver powerful business solutions across Bahrain and the Middle
                            East. With a team of passionate experts and four specialized divisions, we’re here to spark transformation, drive growth, and help
                            you lead with confidence. Whether it’s media, marketing, design, or tech—our integrated approach ensures your business stays ahead
                            in a fast-changing world.
                        </p>
                        <Link href="/career" className="btn capitalize text-white">
                            Join Our Vision
                        </Link>
                    </div>
                </div>
                <div className="bottom-0 ltr:right-0 rtl:left-0 lg:absolute" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                    <img src="/assets/images/about-who-bg.png" alt="About" className="rtl:rotate-y-180" />
                </div>
            </section>

            <section className="relative py-14 lg:py-[100px] xl:-mt-[100px]">
                <div className="absolute top-0 z-[1] h-full w-full bg-white ltr:left-0 rtl:right-0 dark:bg-black xl:w-[85%] xl:rounded-r-[32px]"></div>
                <div className="absolute -top-3 hidden h-full w-full rounded-r-[32px] bg-white/50 ltr:left-3 rtl:right-3 dark:bg-gray-dark xl:inline-block xl:w-[85%]"></div>
                <div className="container relative z-[2] ltr:xl:pr-40 rtl:xl:pl-40">
                    <div className="lg:w-2/3">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6>The Way We Work Wonders</h6>
                            <h4>Here’s how we turn bold ideas into business breakthroughs.</h4>
                        </div>
                        <p className="pb-10 text-center text-lg font-semibold leading-[30px] ltr:lg:text-left rtl:lg:text-right">
                            At Rama Group, our process is built to inspire, create, and deliver results — combining creative thinking, smart strategy, and
                            powerful technology at every stage.
                        </p>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    01
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Discover & Define</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        We begin by understanding your world — your goals, challenges, and what sets you apart. Insight drives everything we do.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    02
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Strategize & Ideate</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        With clarity comes creativity. We develop tailored strategies and fresh ideas that move your brand forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    03
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Design & Develop</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        From standout visuals to seamless digital experiences — we build with purpose, passion, and precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    04
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Launch & Amplify</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        We bring your project to life across the right platforms, making sure it reaches, resonates, and performs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    05
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Measure & Optimize</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        Every launch is just the beginning. We track, learn, and evolve — ensuring your brand keeps growing and glowing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6>Growth</h6>
                        <h4>40% Growth in last year</h4>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3 md:gap-[30px]">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        80%
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        Clients saw an increase of more of 90% on sales1
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        10x
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        Sales went up more than expected
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        1M
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        High engagement rate since day one
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;
