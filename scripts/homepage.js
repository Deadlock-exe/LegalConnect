const homePageContent = document.querySelector('.homepage_content');
const signUpButton = document.getElementById('signup_button');

signUpButton.addEventListener('click', () => {
    const signupContainer = document.createElement('div');
    signupContainer.classList.add('signup_container');
    const customerSignup = document.createElement('a');
    customerSignup.href = '#';
    const serviceProviderSignup = document.createElement('a');
    serviceProviderSignup.href = '#';
    const customerSignupButton = document.createElement('button');
    const serviceProviderSignupButton = document.createElement('button');
    customerSignupButton.classList.add('mainButton');
    customerSignupButton.classList.add('btn');
    serviceProviderSignupButton.classList.add('mainButton');
    serviceProviderSignupButton.classList.add('btn');
    customerSignupButton.textContent = 'Customer Signup';
    serviceProviderSignupButton.textContent = 'Service Provider Signup';
    customerSignup.appendChild(customerSignupButton);
    serviceProviderSignup.appendChild(serviceProviderSignupButton);

    signupContainer.appendChild(customerSignup);
    signupContainer.appendChild(serviceProviderSignup);

    homePageContent.appendChild(signupContainer);

    console.log('signup button clicked');
}, { once: true });