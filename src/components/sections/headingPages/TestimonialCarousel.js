import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Howard Gallagher" description="The staff provided excellent service, and the receptionists were exceptionally helpful, addressing all our inquiries with care"/>
            <TestimonialCard name="Marques Dixon" description="The room was impeccably clean and filled with natural light, and the room service was consistently prompt. We will definitely be returning!"/>
            <TestimonialCard name="Aria Lambert" description="The food offered was both fresh and delectable, and to our delight, the chef surprised us with a dessert they had just created that day."/>
            <TestimonialCard name="Soren Soto" description="Little Lemon restaurant provided me with an extraordinary dining experience that surpassed all expectations."/>
            <TestimonialCard name="Eve Salinas" description="The menu boasted a delightful selection of dishes, each masterfully prepared using fresh, high-quality ingredients."/>
            <TestimonialCard name="Matthias Black" description="Every bite was a culinary delight, and I am eagerly looking forward to revisiting Little Lemon restaurant to savor more of their delightful creations. I highly recommend it!"/>
            <TestimonialCard name="Callum Carlson" description="For an extraordinary dining experience, look no further than Little Lemon restaurant."/>
            <TestimonialCard name="Kaylyn Terry" description="I have dined at this place numerous times and have never been disappointed – it is truly a must-visit destination for any food enthusiast."/>
             </Carousel>
    )
}