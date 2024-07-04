import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FAQsComponent {
  faqSections = [
    {
      title: 'General',
      items: [
        { 
          question: 'Q: What is Explore Era?',
          answer: 'A: Explore Era is a travel booking website that allows users to browse and book travel destinations, accommodations, and activities. We aim to provide a seamless travel planning experience with detailed information and user-friendly booking processes.',
          show: false
        },
        {
          question: 'Q: How do I create an account on Explore Era?',
          answer: 'A: To create an account, click on the "Sign Up" button on the homepage, fill in your details, and follow the instructions to verify your email address.',
          show: false
        },
        {
          question: 'Q: Is there a mobile app for Explore Era?',
          answer: 'A: Currently, Explore Era is available as a web application. We are working on developing a mobile app to enhance your travel planning experience on the go.',
          show: false
        }
      ]
    },
    {
      title: 'Booking',
      items: [
        {
          question: 'Q: How do I make a booking on Explore Era?',
          answer: 'A: To make a booking, select your desired destination, choose your travel dates, fill in the required details, and proceed to payment. Once the payment is successful, your booking will be confirmed.',
          show: false
        },
        {
          question: 'Q: Can I modify or cancel my booking?',
          answer: 'A: Currently, Explore Era does not support booking modifications or cancellations. Please ensure all details are correct before finalizing your booking.',
          show: false
        },
        {
          question: 'Q: How do I know if my booking is confirmed?',
          answer: 'A:After you complete the booking process and make the payment, your booking will be confirmed. You can check the status of your booking in the "My Bookings" section of your account.',
          show: false
        }
      ]
    },
    {
      title: 'Payment',
      items: [
        {
          question: 'Q: What payment methods are accepted on Explore Era?',
          answer: 'A: Explore Era accepts various payment methods, including credit/debit cards, net banking, and popular payment gateways like UPI. All transactions are secured using industry-standard encryption.',
          show: false
        },
        {
          question: 'Q: Is my payment information secure?',
          answer: 'A: Yes, we take your security seriously. Explore Era uses secure encryption protocols to protect your payment information. We do not store your payment details on our servers.',
          show: false
        },
        {
          question: 'Q: Can I get a refund if I cancel my booking?',
          answer: 'A: Explore Era does not offer refunds for any bookings. Please make sure to review all booking details carefully before making a payment.',
          show: false
        }
      ]
    },
    {
      title: 'Travel Information',
      items: [
        {
          question: 'Q: How do I find more information about a travel destination?',
          answer: 'A: Explore Era provides detailed information about each travel destination, including images, descriptions, activities, and pricing. You can browse this information on our website before making a booking.',
          show: false
        },
        {
          question: 'Q: What should I do if I face issues during my travel?',
          answer: 'A: If you encounter any issues during your travel, please contact our customer support team immediately. We are here to assist you 24/7 and ensure you have a smooth travel experience.',
          show: false
        },
      ]
    },
    {
      title: 'Contact',
      items: [
        {
          question: 'Q: How can I contact Explore Era customer support?',
          answer: 'A: You can reach Explore Era customer support through our contact page on the website. We offer support via email, phone. Our customer service team is available 24/7 to assist you with any queries or concerns.',
          show: false
        },
        {
          question: 'Q: Where can I provide feedback about my experience with Explore Era?',
          answer: 'A: We value your feedback! You can provide feedback about your experience by visiting the "Contact Us" section and submitting your comments through the feedback form. Your input helps us improve our services.',
          show: false
        }
      ]
    },
    {
      title: 'Technical',
      items: [
        {
          question: 'Q: I am experiencing technical issues with the website. What should I do?',
          answer: `A: If you encounter any technical issues while using Explore Era, please try clearing your browser cache and cookies or use a different browser. If the problem persists, contact our technical support team through the "Contact Us" section.`,
          show: false
        },
      ]
    }
  ];

  toggleAnswer(item: any) {
    item.show = !item.show;
  }
}
