import { useState } from 'react';
import CounterComponent from '../components/CounterComponent';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import LogoSlider from '../components/LogoSlider';
import ClientSlider from '../components/ClientSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import projects from '../data/viewProject';

const Index = (props: any) => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
        {
            id: 1,
            name: 'Ali Hassan',
            role: 'Operations Manager, TechBahrain',
            thumbnail: '/assets/images/client-img1.png',
            message:
                "We’ve been partnering with Rama Group for over a year now, and their exceptional service in the import business has been a game-changer for us. As the Operations Manager at TechBahrain, I can confidently say that their attention to detail and timely deliveries have made our supply chain operations run smoother. Their team is always accessible, and they go above and beyond to handle all the complexities of international imports. We couldn't ask for a better partner. Highly recommended!",
        },
        {
            id: 2,
            name: 'Sarah Al-Farsi',
            role: 'Purchasing Director, GulfTrade',
            thumbnail: '/assets/images/client-img2.png',
            message:
                ' Rama Group has been instrumental in the growth of our business in Bahrain. As the Purchasing Director for GulfTrade, I’ve worked with numerous suppliers, but none have matched the reliability and professionalism of Rama Group. Their deep knowledge of the import process, customs clearance, and timely shipments has made them a trusted partner. Their customer-first approach truly sets them apart. I highly recommend their services to anyone in need of efficient and hassle-free imports',
        },
    ];

    return (
        <div className="overflow-x-hidden">
            <div className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                    <img
                        src="/assets/images/banner-rightIcon.png"
                        alt="banner-rightIcon"
                        className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
                    />
                    <div className="container">
                        <div className="relative bg-none bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                            <div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[50px] lg:leading-[70px] ">
                                    Empowering Your <span className="italic text-primary">Business</span> <span className="italic text-secondary">Growth</span>{' '}
                                    in Middle East
                                </h2>
                                <p className="my-8 text-lg lg:w-[90%] ">
                                    Integrated business solutions for ambitious companies in Bahrain that need a trusted partner to navigate media, marketing,
                                    and technology.
                                </p>
                                <Link href="/about-us" className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">
                                    read more
                                </Link>
                            </div>
                            <div
                                className="bottom-0 mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                                data-aos-offset="0"
                                data-aos-delay="200"
                            >
                                <img src="/assets/images/home-banner-icon.svg" alt="home-banner-icon" className="rtl:rotate-y-180" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>High - Impact Services</h6>
                        <h4>We help Brands with</h4>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(229, 118, 118, 0.4)',
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >
                                    Marketing & Media Strategy
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    We craft multi-channel marketing plans that drive results — connecting strategy, storytelling, and market insight to help
                                    you grow smarter.
                                </p>
                                <Link
                                    href="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(229, 118, 118, 0.4)',
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M10.1658 20C10.5862 20 10.9617 19.7371 11.1054 19.342L15.8374 6.34204C16.0749 5.68981 15.5919 5 14.8978 5H13.8341C13.4137 5 13.0382 5.26292 12.8945 5.65796L8.16245 18.658C7.92504 19.3102 8.40804 20 9.10214 20H10.1658Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M17.9889 17.0964C18.3794 17.4871 19.0127 17.4873 19.4034 17.0966L23.2929 13.2071C23.6834 12.8166 23.6834 12.1834 23.2929 11.7929L19.4036 7.90359C19.0129 7.51287 18.3793 7.5131 17.9889 7.90409L17.2814 8.61254C16.8913 9.00328 16.8916 9.63632 17.2823 10.0266L19.0501 11.7927C19.441 12.1832 19.441 12.8168 19.0502 13.2074L17.2822 14.9746C16.8916 15.365 16.8914 15.9981 17.2818 16.3888L17.9889 17.0964ZM4.94994 13.2073C4.55904 12.8167 4.55896 12.1832 4.94977 11.7925L6.71781 10.0253C7.10839 9.63494 7.10858 9.00184 6.71823 8.61121L6.01111 7.90359C5.62062 7.51283 4.98726 7.51272 4.59664 7.90334L0.707106 11.7929C0.316582 12.1834 0.316582 12.8166 0.707107 13.2071L4.59639 17.0964C4.98711 17.4871 5.62066 17.4869 6.01111 17.0959L6.71856 16.3874C7.10874 15.9967 7.10837 15.3637 6.71773 14.9734L4.94994 13.2073Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >
                                    Digital & Outdoor Advertising
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    From Google Ads to LED billboards and drone campaigns, we create attention-grabbing moments that turn heads and deliver ROI
                                    — online and offline.
                                </p>
                                <Link
                                    href="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(229, 118, 118, 0.4)',
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >
                                    Creative Design Services
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    Visuals with purpose. From bold brand identities to campaign graphics, we design with intention — ensuring your message
                                    looks as powerful as it sounds.
                                </p>
                                <Link
                                    href="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-t from-transparent to-white/[25%] pt-10 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent lg:py-20">
                <div className="container">
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-28">
                        <div className="order-2 lg:order-1">
                            <div className="heading mb-0 text-center ltr:sm:text-left rtl:sm:text-right">
                                <h6 className="!text-secondary">Results-Driven Marketing for Ambitious Brands</h6>
                                <h4>
                                    FROM <span className="text-secondary">BILLBOARDS</span> TO SOCIAL—WE HANDLE IT <span className="text-secondary">ALL</span>,
                                    SO YOU DON’T HAVE TO
                                </h4>
                            </div>
                            <p className="mt-[18px] text-lg font-semibold">
                                Let your team focus on the big picture while we take care of the strategy, execution, and performance across every channel.
                            </p>
                            <div className="text-black">
                                <div className="mt-14 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-semibold dark:text-white">
                                            From Outdoor Ads to Full-Funnel Digital Campaigns, We Handle It All.
                                        </h5>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-semibold dark:text-white">
                                            Let's discuss how we can get you more leads, sales, and visibility—without the hassle.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn mt-10 bg-secondary py-5 px-[50px] text-white hover:bg-primary">
                                Book a Free Consultation
                            </button>
                        </div>
                        <div className="order-1 w-full max-w-[560px] lg:order-2">
                            <img src="/assets/images/marketing/marketing3.png" className="rtl:rotate-y-180" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 dark:bg-black lg:py-24">
                <div className="swiper industry-slider px-5">
                    <div className="container">
                        <div className="heading text-center">
                            <h4 className="mb-3">
                                OUR <span className="text-primary">BEST CLIENTS</span>
                            </h4>
                        </div>
                    </div>
                    <LogoSlider></LogoSlider>
                </div>
            </section>

            <section className="mt-14 mb-10 bg-transparent bg-gradient-to-t from-transparent to-white/[55%] pt-20 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent md:mt-20">
                <div className="container">
                    <div className="heading mb-12 text-center md:!mb-[90px] lg:max-w-[584px] ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="!font-black">
                            What <span className="bg-secondary p-1 text-white">We</span> Do
                        </h4>
                        <p className="mt-5 text-lg font-medium">Everything You Need to Grow—All Under One Roof</p>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                        <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                            <span>
                                <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M31.8178 38C37.9005 38.0168 42 33.0191 42 26.8767V13.14C42 6.99765 37.9005 2 31.8178 2H12.1823C6.09958 2 2 6.99765 2 13.14V26.8767C2 33.0191 6.09958 38.0168 12.1823 38H31.8178Z"
                                        fill="#FFC452"
                                        fillOpacity="0.2"
                                        stroke="#FFC452"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M33.8045 13.7019L24.9179 20.928C23.2389 22.26 20.8767 22.26 19.1976 20.928L10.2361 13.7019"
                                        stroke="#FFC452"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">OOH Advertising:</h3>
                            <p className="mt-4 text-lg font-semibold">Strategic placements that get attention—billboards, lampposts, malls, and more.</p>
                        </div>
                        <div className="mt-0 lg:-mt-7">
                            <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                                <span>
                                    <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M32.7932 33.5173C32.7932 33.5173 10.5172 28.9311 7.8966 28.2759C5.27588 27.6208 2 24.1858 2 19.7587C2 15.3314 5.27588 11.8966 7.8966 11.2414C10.5172 10.5862 32.7932 6 32.7932 6"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                        />
                                        <path
                                            d="M32.7932 33.5173C32.7932 33.5173 10.5172 28.9311 7.8966 28.2759C5.27588 27.6208 2 24.1858 2 19.7587C2 15.3314 5.27588 11.8966 7.8966 11.2414C10.5172 10.5862 32.7932 6 32.7932 6"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M40.0002 19.7587C40.0002 26.9103 36.3312 33.5173 32.7933 33.5173C29.2554 33.5173 25.5864 26.9103 25.5864 19.7587C25.5864 12.6069 29.2554 6 32.7933 6C36.3312 6 40.0002 12.6069 40.0002 19.7587Z"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Paid Media</h3>
                                <p className="mt-4 text-lg font-semibold">Facebook, Instagram, TikTok, Google—you name it. We plan, launch & optimize.</p>
                            </div>
                        </div>
                        <div className="mt-0 lg:-mt-14">
                            <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                                <span>
                                    <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.8344 40.6688C28.1318 40.6688 35.6688 33.1318 35.6688 23.8344C35.6688 14.537 28.1318 7 18.8344 7C9.53703 7 2 14.537 2 23.8344C2 33.1318 9.53703 40.6688 18.8344 40.6688Z"
                                            fill="#66DA78"
                                            fillOpacity="0.2"
                                            stroke="#66DA78"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M30.5432 36.4171L37.1433 43" stroke="#66DA78" strokeWidth="3" />
                                        <path d="M30.5432 36.4171L37.1433 43" stroke="#66DA78" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Content Creation</h3>
                                <p className="mt-4 text-lg font-semibold">Engaging videos, graphics, and campaigns that convert.</p>
                            </div>
                        </div>
                        <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                            <span>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.2"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M28.7514 11.3335H11.2482C5.15482 11.3335 1.33333 15.6506 1.33333 21.7602V38.2397C1.33333 44.3493 5.13862 48.6664 11.2482 48.6664H28.7413C34.8609 48.6664 38.6642 44.3493 38.6642 38.2397V21.7602C38.6723 15.6506 34.867 11.3335 28.7514 11.3335Z"
                                        fill="#FF5B5D"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.03026 13.3468C5.02522 11.2055 7.87114 10 11.2484 10H28.7516C32.1388 10 34.9871 11.2047 36.9807 13.3474C38.9645 15.4795 40.0024 18.4314 39.998 21.762V38.2398C39.998 41.5697 38.9585 44.5212 36.9739 46.6529C34.9793 48.7955 32.1306 50 28.7415 50H11.2484C7.86381 50 5.01728 48.795 3.02366 46.6527C1.04009 44.5212 0 41.5698 0 38.2398V21.7602C0 18.4287 1.04502 15.4776 3.03026 13.3468ZM4.98168 15.1649C3.53284 16.72 2.66712 18.9822 2.66712 21.7602V38.2398C2.66712 41.0193 3.52968 43.2814 4.97615 44.8358C6.41261 46.3793 8.52347 47.3329 11.2484 47.3329H28.7415C31.4721 47.3329 33.5849 46.3789 35.0218 44.8356C36.4687 43.2814 37.3309 41.0194 37.3309 38.2398V21.7602V21.7585C37.3346 18.9795 36.4739 16.7181 35.0281 15.1642C33.5923 13.621 31.4801 12.6671 28.7516 12.6671H11.2484C8.53234 12.6671 6.42081 13.6202 4.98168 15.1649Z"
                                        fill="#FF5B5D"
                                    />
                                    <path
                                        d="M12.371 33.1768C12.371 36.7867 16.2934 39.0301 19.4049 37.1999L24.8053 34.0234C27.8733 32.2187 27.8733 27.7818 24.8053 25.9772L19.4049 22.8006C16.2934 20.9705 12.371 23.2139 12.371 26.8238V33.1768Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.0527 34.901L23.4531 31.7245C24.7679 30.9511 24.7679 29.0496 23.4531 28.2761L18.0527 25.0996C16.7192 24.3152 15.0382 25.2767 15.0382 26.8238V33.1768C15.0382 34.7239 16.7192 35.6854 18.0527 34.901ZM19.4049 37.1999C16.2934 39.0301 12.371 36.7867 12.371 33.1768V26.8238C12.371 23.2139 16.2934 20.9705 19.4049 22.8006L24.8053 25.9772C27.8733 27.7818 27.8733 32.2187 24.8053 34.0234L19.4049 37.1999Z"
                                        fill="#FF5B5D"
                                    />
                                </svg>
                            </span>
                            <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Social Media Management</h3>
                            <p className="mt-4 text-lg font-semibold">Grow your audience and keep them engaged.</p>
                        </div>
                        <div className="mt-0 lg:-mt-4">
                            <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                                <span>
                                    <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.95645 13C3.32426 13 2 14.3465 2 16.0041V17.7722C2 19 2.46691 20.1808 3.30212 21.0689L12.4552 30.8015L12.4592 30.7954C14.2263 32.6044 15.2205 35.0498 15.2205 37.5996V46.2353C15.2205 46.8124 15.8242 47.1808 16.3253 46.9086L21.5378 44.0682C22.3247 43.6384 22.8158 42.8036 22.8158 41.897V37.5771C22.8158 35.0416 23.7959 32.6064 25.5468 30.8015L34.6999 21.0689C35.5331 20.1808 36 19 36 17.7722V16.0041C36 14.3465 34.6777 13 33.0456 13H4.95645Z"
                                            fill="#FF8A1D"
                                            fillOpacity="0.2"
                                            stroke="#FF8A1D"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Performance Reporting</h3>
                                <p className="mt-4 text-lg font-semibold">Transparent data, clear results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black bg-[url(/assets/images/number-bg.png)] bg-cover bg-center bg-no-repeat py-12 dark:bg-gray-dark lg:py-10">
                <div className="container">
                    <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
                        <h4 className="text-xl font-bold">
                            No more chasing five different vendors. With <span className="text-secondary">RAMA</span>, it’s all in one place—done for you.
                        </h4>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-transparent to-white/50 py-12 dark:to-white/[0.02] lg:py-12">
                <div className="container">
                    <h5 className="mt-[30px] text-3xl font-extrabold text-black dark:text-white md:text-[50px] md:leading-[70px] xl:w-3/5">
                        What Our Clients Say
                    </h5>
                    <div className="mt-12">
                        <ClientSlider feedbacks={feedbacks} type="Rama"></ClientSlider>
                    </div>
                </div>
            </section>

            <section className="relative overflow-x-hidden bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20">
                <div className="absolute inset-x-0 top-0 h-[580px] bg-black">
                    <img
                        src="/assets/images/personal-portfolio/star-icon.svg"
                        alt=""
                        className="absolute top-0 ltr:left-0 rtl:right-0 rtl:rotate-y-180"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    />
                </div>
                <div className="container relative z-[1]">
                    <div className="mb-10 max-w-[410px]">
                        <div className="mb-5 flex items-center gap-10">
                            <h6 className="text-lg font-extrabold uppercase text-secondary">
                                <span className="text-primary">Case Study</span>
                            </h6>
                            <div className="flex gap-2.5">
                                <button
                                    type="button"
                                    className="portfolio-slider-button-prev flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
                                >
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path
                                            d="M7 16L1 9L2.5 7.25M7 2L5 4.33333"
                                            stroke="currentcolor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="portfolio-slider-button-next flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
                                >
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path
                                            d="M2 2L4 4.33333M2 16L8 9L6.5 7.25"
                                            stroke="currentcolor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        className="xl:w-[1680px]"
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.portfolio-slider-button-next',
                            prevEl: '.portfolio-slider-button-prev',
                        }}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                            1142: { slidesPerView: 3 },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="bg-white dark:bg-gray-dark">
                                    <div className="h-72 md:h-96">
                                        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex items-center justify-between gap-2 p-4 md:p-7">
                                        <div className="font-extrabold">
                                            <h6 className="text-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent">
                                                {project.category}
                                            </h6>
                                            <h4 className="py-4 text-xl text-black dark:text-white">{project.title}</h4>
                                            <Link
                                                href={`/view-project?id=${project.id}`}
                                                className="group flex items-center gap-4 font-semibold transition hover:text-secondary"
                                            >
                                                <span>View Project</span>
                                                <span className="transition-all group-hover:pl-2">
                                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="flex items-center gap-3 md:gap-7">
                                            {project.tools.map((tool, index) => (
                                                <div key={index} className="w-5 md:w-8">
                                                    <img
                                                        src={`/assets/images/casestudy/${tool}`}
                                                        alt={tool}
                                                        className="w-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <Swiper
                        className="xl:w-[1680px]"
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.portfolio-slider-button-next',
                            prevEl: '.portfolio-slider-button-prev',
                        }}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1142: {
                                slidesPerView: 3,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        <SwiperSlide>
                            <div className=" bg-white dark:bg-gray-dark">
                                <div className="h-72 md:h-96">
                                    <img src="/assets/images/casestudy/portfolio-1.jpg" alt="" className="h-full w-full object-cover " />
                                </div>
                                <div className="flex items-center justify-between gap-2 p-4 md:p-7">
                                    <div className="font-extrabold">
                                        <h6 className="tex-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent">
                                            Branding
                                        </h6>
                                        <h4 className="py-4 text-xl text-black dark:text-white">Space Landing page</h4>
                                        <Link href="#" className="group flex items-center gap-4 font-semibold transition hover:text-secondary">
                                            <span>View Project</span>
                                            <span className="transition-all group-hover:pl-2">
                                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-7">
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/casestudy/sketch-icon.svg" alt="" className="w-full" />
                                        </div>
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/casestudy/figma-icon.svg" alt="" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white dark:bg-gray-dark">
                                <div className="h-72 md:h-96">
                                    <img src="/assets/images/casestudy/portfolio-2.jpg" alt="" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex items-center justify-between gap-2 p-4 md:p-7">
                                    <div className="font-extrabold">
                                        <h6 className="tex-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent">
                                            Branding
                                        </h6>
                                        <h4 className="py-4 text-xl text-black dark:text-white">Crypto Game - UX Interface</h4>
                                        <Link href="#" className="group flex items-center gap-4 font-semibold transition hover:text-secondary">
                                            <span>View Project</span>
                                            <span className="transition-all group-hover:pl-2">
                                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-7">
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/casestudy/sketch-icon.svg" alt="" className="w-full" />
                                        </div>
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/casestudy/figma-icon.svg" alt="" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white dark:bg-gray-dark">
                                <div className="h-72 md:h-96">
                                    <img src="/assets/images/casestudy/portfolio-3.jpg" alt="" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex items-center justify-between gap-2 p-4 md:p-7">
                                    <div className="font-extrabold">
                                        <h6 className="tex-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent">
                                            product design
                                        </h6>
                                        <h4 className="py-4 text-xl text-black dark:text-white">Space Landing page</h4>
                                        <Link href="#" className="group flex items-center gap-4 font-semibold transition hover:text-secondary">
                                            <span>View Project</span>
                                            <span className="transition-all group-hover:pl-2">
                                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-7">
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/casestudy/sketch-icon.svg" alt="" className="w-full" />
                                        </div>
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/casestudy/figma-icon.svg" alt="" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper> */}
                </div>
            </section>

            <section
                className="py-14 dark:!bg-none lg:py-[100px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 54.69%)',
                }}
            >
                {' '}
                <CounterComponent title="Company Facts" />
            </section>
            <section className="relative bg-white py-12 dark:bg-black lg:py-24">
                {/* <span className="absolute bottom-0 hidden max-w-[120px] ltr:right-0 rtl:left-0 sm:block xl:max-w-[250px]">
                    <svg className="h-full w-full" width="300" height="229" viewBox="0 0 300 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M122.411 2.08716L81.1719 30.5425H90.7378L127.421 5.04356L122.411 2.08716Z" fill="#08111F" />
                        <path
                            d="M220.307 30.5257V229.008L86.0305 227.798V29.3331L123.773 3.22941L124.042 3.04463L125.454 2.07037L125.538 2.00317L125.639 2.08716L167.434 30.5257H220.307Z"
                            fill="#47BDFF"
                        />
                        <path
                            d="M220.307 30.5256V229.008L167.484 227.798C167.619 191.599 167.871 52.4299 167.568 33.8684C167.535 31.7183 167.501 30.5424 167.434 30.5256H220.307Z"
                            fill="#B476E5"
                        />
                        <path
                            d="M188.095 64.8266H177.47V49.5071C177.47 46.5675 179.858 44.199 182.783 44.199C185.725 44.199 188.095 46.5843 188.095 49.5071V64.8266Z"
                            fill="#FFD181"
                        />
                        <path
                            d="M210.96 133.731H200.335V118.411C200.335 115.472 202.722 113.103 205.647 113.103C208.589 113.103 210.96 115.489 210.96 118.411V133.731Z"
                            fill="#FFD181"
                        />
                        <g opacity="0.5">
                            <path
                                d="M206.253 44.199C209.195 44.199 211.565 46.5843 211.565 49.5071V64.8266H200.94V49.5071C200.94 46.5675 203.327 44.199 206.253 44.199Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 98.5229H177.555V83.2034C177.555 80.2637 179.942 77.8953 182.867 77.8953C185.809 77.8953 188.18 80.2805 188.18 83.2034V98.5229Z"
                                fill="white"
                            />
                            <path
                                d="M210.96 98.5229H200.335V83.2034C200.335 80.2637 202.722 77.8953 205.647 77.8953C208.589 77.8953 210.96 80.2805 210.96 83.2034V98.5229Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 133.731H177.555V118.411C177.555 115.472 179.942 113.103 182.867 113.103C185.809 113.103 188.18 115.489 188.18 118.411V133.731Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 168.334H177.555V153.015C177.555 150.075 179.942 147.707 182.867 147.707C185.809 147.707 188.18 150.092 188.18 153.015V168.334Z"
                                fill="white"
                            />
                            <path
                                d="M210.96 168.334H200.335V153.015C200.335 150.075 202.722 147.707 205.647 147.707C208.589 147.707 210.96 150.092 210.96 153.015V168.334Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 206.667H177.555V191.347C177.555 188.408 179.942 186.039 182.867 186.039C185.809 186.039 188.18 188.424 188.18 191.347V206.667Z"
                                fill="white"
                            />
                            <path
                                d="M210.96 206.667H200.335V191.347C200.335 188.408 202.722 186.039 205.647 186.039C208.589 186.039 210.96 188.424 210.96 191.347V206.667Z"
                                fill="white"
                            />
                        </g>
                        <g opacity="0.5">
                            <path
                                d="M110.038 62.4078H99.4126V47.0882C99.4126 44.1486 101.8 41.7802 104.725 41.7802C107.667 41.7802 110.038 44.1654 110.038 47.0882V62.4078Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 61.9541H136.315V46.6346C136.315 43.695 138.702 41.3265 141.627 41.3265C144.57 41.3265 146.94 43.7118 146.94 46.6346V61.9541Z"
                                fill="white"
                            />
                            <path
                                d="M110.038 97.011H99.4126V81.6915C99.4126 78.7519 101.8 76.3834 104.725 76.3834C107.667 76.3834 110.038 78.7687 110.038 81.6915V97.011Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 96.5574H136.315V81.2379C136.315 78.2983 138.702 75.9298 141.627 75.9298C144.57 75.9298 146.94 78.3151 146.94 81.2379V96.5574Z"
                                fill="white"
                            />
                            <path
                                d="M110.038 134.789H99.4126V119.47C99.4126 116.53 101.8 114.161 104.725 114.161C107.667 114.161 110.038 116.547 110.038 119.47V134.789Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 134.336H136.315V119.016C136.315 116.076 138.702 113.708 141.627 113.708C144.57 113.708 146.94 116.093 146.94 119.016V134.336Z"
                                fill="white"
                            />
                            <path
                                d="M110.038 168.653H99.4126V153.334C99.4126 150.394 101.8 148.026 104.725 148.026C107.667 148.026 110.038 150.411 110.038 153.334V168.653Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 168.2H136.315V152.88C136.315 149.941 138.702 147.572 141.627 147.572C144.57 147.572 146.94 149.957 146.94 152.88V168.2Z"
                                fill="white"
                            />
                        </g>
                        <path
                            d="M135.693 204.248V228.067H112.61V204.248C112.61 197.965 117.704 192.876 123.975 192.876H124.311C130.582 192.876 135.676 197.965 135.676 204.248H135.693Z"
                            fill="white"
                        />
                        <path d="M122.109 2.00317L166.004 33.8685H226.611L181.724 3.14542L122.109 2.00317Z" fill="#08111F" />
                        <path
                            opacity="0.2"
                            d="M295.561 67.2269L295.561 67.2269L295.557 67.2285C293.716 68.082 292.233 69.5441 291.359 71.3857L291.358 71.3884L290.057 74.1502L288.783 71.3799L288.783 71.3799L288.781 71.3765C287.927 69.5362 286.464 68.0548 284.621 67.1817L284.618 67.1804L281.856 65.8818L284.627 64.61L284.627 64.61L284.63 64.6084C286.472 63.7548 287.954 62.2928 288.828 60.4512L288.83 60.4485L290.13 57.6867L291.404 60.457L291.406 60.4604C292.26 62.3007 293.724 63.7821 295.566 64.6552L295.569 64.6565L298.331 65.9551L295.561 67.2269Z"
                            fill="url(#paint0_linear_79_171)"
                            fillOpacity="0.5"
                            stroke="url(#paint1_linear_79_171)"
                            strokeWidth="2"
                        />
                        <path
                            opacity="0.2"
                            d="M256.035 152.778L256.032 152.779C254.191 153.633 252.708 155.095 251.834 156.936L251.833 156.939L250.532 159.701L249.258 156.931L249.258 156.931L249.256 156.927C248.402 155.087 246.938 153.606 245.096 152.732L245.093 152.731L242.331 151.433L245.102 150.161L245.105 150.159C246.946 149.306 248.429 147.844 249.303 146.002L249.304 145.999L250.605 143.238L251.879 146.008L251.881 146.011C252.735 147.851 254.199 149.333 256.041 150.206L256.044 150.207L258.806 151.506L256.035 152.778Z"
                            fill="url(#paint2_linear_79_171)"
                            fillOpacity="0.5"
                            stroke="url(#paint3_linear_79_171)"
                            strokeWidth="2"
                        />
                        <path
                            opacity="0.2"
                            d="M15.3734 139.155L15.37 139.156C13.5286 140.01 12.0458 141.472 11.1717 143.314L11.1705 143.316L9.86969 146.078L8.59579 143.308L8.59424 143.304C7.73978 141.464 6.27635 139.983 4.43363 139.11L4.43094 139.108L1.66904 137.81L4.43945 136.538L4.43946 136.538L4.44279 136.536C6.28426 135.683 7.76704 134.221 8.64108 132.379L8.64235 132.376L9.94312 129.615L11.217 132.385L11.2186 132.388C12.073 134.229 13.5365 135.71 15.3792 136.583L15.3819 136.584L18.1438 137.883L15.3734 139.155Z"
                            fill="url(#paint4_linear_79_171)"
                            fillOpacity="0.5"
                            stroke="url(#paint5_linear_79_171)"
                            strokeWidth="2"
                        />
                        <path
                            opacity="0.2"
                            d="M210.61 11.2065L210.606 11.2081C208.765 12.0617 207.282 13.5237 206.408 15.3653L206.407 15.368L205.106 18.1298L203.832 15.3595L203.831 15.3561C202.976 13.5159 201.513 12.0344 199.67 11.1613L199.667 11.16L196.905 9.86139L199.676 8.58957L199.676 8.58958L199.679 8.58804C201.521 7.73446 203.003 6.27237 203.877 4.43084L203.879 4.42815L205.179 1.66637L206.453 4.43665L206.453 4.43665L206.455 4.43999C207.309 6.28027 208.773 7.76171 210.616 8.63485L210.618 8.63611L213.38 9.93473L210.61 11.2065Z"
                            fill="url(#paint6_linear_79_171)"
                            fillOpacity="0.5"
                            stroke="url(#paint7_linear_79_171)"
                            strokeWidth="2"
                        />
                        <path
                            opacity="0.2"
                            d="M55.6375 75.2562L55.6342 75.2578C53.7927 76.1113 52.3099 77.5734 51.4359 79.415L51.4346 79.4177L50.1339 82.1795L48.8599 79.4092L48.8599 79.4092L48.8584 79.4058C48.0039 77.5655 46.5405 76.0841 44.6978 75.211L44.6951 75.2097L41.9332 73.9111L44.7036 72.6393L44.707 72.6377C46.5484 71.7841 48.0312 70.3221 48.9052 68.4805L48.9065 68.4778L50.2073 65.716L51.4812 68.4863L51.4827 68.4897C52.3372 70.33 53.8006 71.8114 55.6433 72.6845L55.646 72.6858L58.4079 73.9844L55.6375 75.2562Z"
                            fill="url(#paint8_linear_79_171)"
                            fillOpacity="0.5"
                            stroke="url(#paint9_linear_79_171)"
                            strokeWidth="2"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_79_171" x1="290.094" y1="56.0204" x2="290.094" y2="75.8165" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_79_171" x1="290.094" y1="56.0204" x2="290.094" y2="75.8165" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_79_171" x1="250.569" y1="141.571" x2="250.569" y2="161.367" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_79_171" x1="250.569" y1="141.571" x2="250.569" y2="161.367" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_79_171" x1="9.9064" y1="127.948" x2="9.9064" y2="147.744" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_79_171" x1="9.9064" y1="127.948" x2="9.9064" y2="147.744" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_79_171" x1="205.143" y1="0" x2="205.143" y2="19.7961" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_79_171" x1="205.143" y1="0" x2="205.143" y2="19.7961" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_79_171" x1="50.1706" y1="64.0497" x2="50.1706" y2="83.8458" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_79_171" x1="50.1706" y1="64.0497" x2="50.1706" y2="83.8458" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span> */}
                <div className="container">
                    <div className="heading mb-0 w-full text-center lg:max-w-[478px] ltr:lg:text-left rtl:lg:text-right">
                        <h6 className="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">why choose Rama</h6>
                        <h4 className="!font-black">
                            We’re Not Just Another <span className="text-secondary">Agency</span>
                        </h4>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="flex gap-5">
                            <div>
                                <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(204,102,1,0.06)]">
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9755 7.02706C12.4315 6.20905 12.6595 5.80005 13.0004 5.80005C13.3413 5.80005 13.5693 6.20905 14.0253 7.02706L14.1432 7.23869C14.2728 7.47115 14.3376 7.58737 14.4386 7.66406C14.5396 7.74075 14.6654 7.76921 14.9171 7.82615L15.1462 7.87798C16.0316 8.07833 16.4744 8.1785 16.5797 8.51723C16.6851 8.85596 16.3832 9.20891 15.7796 9.91482L15.6234 10.0974C15.4518 10.298 15.3661 10.3983 15.3275 10.5224C15.2889 10.6465 15.3019 10.7803 15.3278 11.048L15.3514 11.2916C15.4427 12.2335 15.4883 12.7044 15.2125 12.9137C14.9368 13.1231 14.5222 12.9322 13.6931 12.5505L13.4787 12.4517C13.2431 12.3432 13.1253 12.289 13.0004 12.289C12.8755 12.289 12.7577 12.3432 12.5221 12.4517L12.3076 12.5505C11.4786 12.9322 11.064 13.1231 10.7882 12.9137C10.5125 12.7044 10.5581 12.2335 10.6494 11.2916L10.673 11.048C10.6989 10.7803 10.7119 10.6465 10.6733 10.5224C10.6347 10.3983 10.5489 10.298 10.3774 10.0974L10.2212 9.91482C9.61756 9.20891 9.31573 8.85596 9.42106 8.51723C9.5264 8.1785 9.96914 8.07833 10.8546 7.87798L11.0837 7.82615C11.3353 7.76921 11.4612 7.74075 11.5622 7.66406C11.6632 7.58737 11.728 7.47115 11.8576 7.23869L11.9755 7.02706Z"
                                            stroke="#CC6601"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                        <path
                                            d="M13 17.8814L8.47425 22.5674C7.82611 23.2385 7.50204 23.574 7.2276 23.6901C6.60222 23.9547 5.9085 23.7283 5.57953 23.1522C5.43516 22.8994 5.39018 22.4434 5.3002 21.5314C5.2494 21.0164 5.224 20.759 5.1469 20.5433C4.97429 20.0605 4.61159 19.685 4.14533 19.5063C3.93705 19.4264 3.68839 19.4001 3.19107 19.3475C2.31024 19.2544 1.86983 19.2078 1.62566 19.0583C1.06926 18.7177 0.850571 17.9994 1.10611 17.3519C1.21826 17.0677 1.54233 16.7322 2.19047 16.0611L5.1469 13"
                                            stroke="#CC6601"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                        <path
                                            d="M13 17.8814L17.5257 22.5674C18.1739 23.2385 18.498 23.574 18.7724 23.6901C19.3978 23.9547 20.0915 23.7283 20.4205 23.1522C20.5648 22.8994 20.6098 22.4434 20.6998 21.5314C20.7506 21.0164 20.776 20.759 20.8531 20.5433C21.0257 20.0605 21.3884 19.685 21.8547 19.5063C22.0629 19.4264 22.3116 19.4001 22.8089 19.3475C23.6898 19.2544 24.1302 19.2078 24.3743 19.0583C24.9307 18.7177 25.1494 17.9994 24.8939 17.3519C24.7817 17.0677 24.4577 16.7322 23.8095 16.0611L20.8531 13"
                                            stroke="#CC6601"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                        <path
                                            d="M5.19961 6.2763C4.81255 7.2419 4.59961 8.29608 4.59961 9.4C4.59961 14.0392 8.36042 17.8 12.9996 17.8C17.6388 17.8 21.3996 14.0392 21.3996 9.4C21.3996 4.76081 17.6388 1 12.9996 1C11.8957 1 10.8415 1.21295 9.87591 1.6"
                                            stroke="#CC6601"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold dark:text-white">Full Service</h5>
                                <p className="mt-2 text-sm font-semibold">From offline to online, we handle it all</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(52,102,255,0.06)]">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.8 5.8C17.8 3.53726 17.8 2.40589 17.097 1.70294C16.3941 1 15.2627 1 13 1C10.7372 1 9.60584 1 8.90289 1.70294C8.19995 2.40589 8.19995 3.53726 8.19995 5.8"
                                            stroke="#3466FF"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                        <path
                                            d="M10.6001 16.6H5.8001C5.23441 16.6 4.95157 16.6 4.77583 16.7757C4.6001 16.9514 4.6001 17.2343 4.6001 17.8V19C4.6001 19.5657 4.6001 19.8485 4.77583 20.0242C4.95157 20.2 5.23441 20.2 5.8001 20.2H10.6001C11.1658 20.2 11.4486 20.2 11.6244 20.0242C11.8001 19.8485 11.8001 19.5657 11.8001 19V17.8C11.8001 17.2343 11.8001 16.9514 11.6244 16.7757C11.4486 16.6 11.1658 16.6 10.6001 16.6Z"
                                            stroke="#3466FF"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M5.80005 6.40002V16.6M5.80005 24.4V20.8" stroke="#3466FF" strokeWidth="2" strokeLinecap="square" />
                                        <path d="M20.2 6.40002V10.6M20.2 24.4V15.4" stroke="#3466FF" strokeWidth="2" strokeLinecap="square" />
                                        <path
                                            d="M1 15.4C1 10.8746 1 8.61182 2.40589 7.20594C3.81178 5.80005 6.07452 5.80005 10.6 5.80005H15.4C19.9255 5.80005 22.1882 5.80005 23.5941 7.20594C24.3779 7.98975 24.7248 9.03991 24.8782 10.6M25 15.4C25 19.9255 25 22.1883 23.5941 23.5942C22.1882 25 19.9255 25 15.4 25H10.6C6.07453 25 3.81177 25 2.40589 23.5942C1.62207 22.8103 1.27525 21.7602 1.12179 20.2"
                                            stroke="#3466FF"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold dark:text-white">Dedicated Team</h5>
                                <p className="mt-2 text-sm font-semibold">You’ll have direct access to real experts, not interns</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(0,102,0,0.06)]">
                                    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25 10.6C25 6.07452 25 3.81177 23.5941 2.40589C22.1882 1 19.9255 1 15.4 1H10.6C6.07452 1 3.81177 1 2.40589 2.40589C1 3.81177 1 6.07452 1 10.6C1 15.1255 1 17.3882 2.40589 18.7941C3.81177 20.2 6.07452 20.2 10.6 20.2H15.4C19.9255 20.2 22.1882 20.2 23.5941 18.7941C24.3779 18.0103 24.7247 16.9601 24.8782 15.4"
                                            stroke="#006600"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                        <path d="M10.6 15.4H5.80005" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                        <path d="M15.4001 15.4H13.6001" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                        <path d="M1 8.19995L7 8.19995M25 8.19995L11.8 8.19995" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold dark:text-white">ROI-Focused</h5>
                                <p className="mt-2 text-sm font-semibold">We track, test, and optimize to deliver measurable results</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(0,102,0,0.06)]">
                                    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25 10.6C25 6.07452 25 3.81177 23.5941 2.40589C22.1882 1 19.9255 1 15.4 1H10.6C6.07452 1 3.81177 1 2.40589 2.40589C1 3.81177 1 6.07452 1 10.6C1 15.1255 1 17.3882 2.40589 18.7941C3.81177 20.2 6.07452 20.2 10.6 20.2H15.4C19.9255 20.2 22.1882 20.2 23.5941 18.7941C24.3779 18.0103 24.7247 16.9601 24.8782 15.4"
                                            stroke="#006600"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                        />
                                        <path d="M10.6 15.4H5.80005" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                        <path d="M15.4001 15.4H13.6001" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                        <path d="M1 8.19995L7 8.19995M25 8.19995L11.8 8.19995" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold dark:text-white">Speed & Simplicity</h5>
                                <p className="mt-2 text-sm font-semibold">We launch fast and communicate clearly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black bg-[url(/assets/images/overlay-noise.png)] bg-cover bg-no-repeat py-14 md:py-20">
                <div className="container">
                    <div className="flex flex-col items-center gap-8 lg:flex-row">
                        <div className="flex-1">
                            <div className="heading-gradiant">
                                <h4 className="!text-white">Ready to Scale Your Brand Without the Stress?</h4>
                            </div>
                            <div className="text-black">
                                <div className="mt-14 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white ">Free 30-minute consultation</h5>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white">Actionable advice—whether we work together or not</h5>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white">Limited slots available this month</h5>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn mt-10 bg-secondary py-5 px-[50px] text-white hover:bg-primary">
                                Book a Free Consultation
                            </button>
                        </div>
                        <div className="max-w-[370px] flex-none" data-aos="fade-up" data-aos-duration="1000">
                            <img src="/assets/images/nft-img.png" alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="from-transparent to-white/[25%] py-14 pt-10 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent lg:py-[100px]  ">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                            <h6>Get In Touch.</h6>
                            <h4 className="sm:!leading-[50px]">Ready to Get Started?</h4>
                            <img
                                src="/assets/images/form-img.png"
                                alt="form-image"
                                className="mx-auto"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            />
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#2A2A2A] lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#2A2A2A] dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#2A2A2A] dark:text-white"
                                    >
                                        Email Address
                                    </label>
                                    <svg
                                        width="22"
                                        height="21"
                                        viewBox="0 0 22 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#2A2A2A] dark:text-white"
                                    >
                                        Mobile Number
                                    </label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#2A2A2A] dark:text-white"
                                    >
                                        City
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <input
                                    type="text"
                                    name="message"
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label htmlFor="" className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#2A2A2A] dark:text-white">
                                    Message
                                </label>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="button" className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
