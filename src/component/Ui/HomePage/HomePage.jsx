import React from 'react'
import LowerBanner from '../LowerBanner/LowerBanner';
import HomeAbout from '../HomeAbout/HomeAbout'
import CourseSection from '../CourseSection/CourseSection'
import Banner from '../Banner/Banner'
import CourseList from '../CourseList/CourseList'
import SearchPage from '../Search Page/SearchPage'
import RecordedCourse from '../RecordedCourse/RecordedCourse';
import FeatureSection from '../FeaturedSection/FeaturedSection'
import BlogSection from '../BlogSection/BlogSection'
import Testimonials from '../Testimonials/Testimonials'

const HomePage = () => {
  return (
    <div className="">
        <Banner/>
        <LowerBanner/>
        <HomeAbout/>
        <CourseSection/>
        <CourseList/>
        <SearchPage/>
        <RecordedCourse/>
        <FeatureSection/>
        <Testimonials/>
        <BlogSection/>
    </div>
  )
}

export default HomePage