import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Link from 'next/link';
const LogoSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={2500}
            breakpoints={{
                320: {
                    slidesPerView: 1.7,
                },
                600: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 7,
                },
            }}
            dir={isRtl ? 'rtl' : 'ltr'}
            key={isRtl ? 'true' : 'false'}
        >
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/client-logo/Al Salam Bank logo.svg" alt="" className="mx-auto w-32 transition hover:scale-110 items-center justify-center flex" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/client-logo/Flydubai logo.svg" alt="" className="mx-auto w-32 transition hover:scale-110 items-center justify-center flex" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/client-logo/Harry Winston logo.svg" alt="" className="mx-auto w-30 transition hover:scale-110 items-center justify-center flex" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/client-logo/hublot-seek logo.svg" alt="" className="mx-auto w-20 transition hover:scale-110 items-center justify-center flex" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/client-logo/Patek phillipe logo.svg" alt="" className="mx-auto w-32 transition hover:scale-110 items-center justify-center flex" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/client-logo/Tag-heuer logo.svg" alt="" className="mx-auto w-20 transition hover:scale-110 items-center justify-center flex" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/client-logo/Zain Logo.svg" alt="" className="mx-auto w-32 transition hover:scale-110 items-center justify-center flex" />
                </Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default LogoSlider;
