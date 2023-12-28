module.exports={
    title: 'LinkedIn Job Search: Find US Jobs, Internships, Jobs Near Me',
    search_job_name:'//button[contains(@class,\'cursor-text mt\')]',
    search_job_area:'//button[contains(@aria-label,\'Location\')]',
    search_job_submit:'Search Jobs',
    imageField: '(//*[contains(text(),\'Jobs\')])[1]',
    usernameField: '[ng-model="$ctrl.formData.username"]',
    bioField: '[ng-model="$ctrl.formData.bio"]',
    emailField: '[ng-model="$ctrl.formData.email"]',
    passwordField: '[ng-model="$ctrl.formData.password"]',
    submitButton: 'button[type="submit"]',
    logoutButton: 'button[ng-click="$ctrl.logout()"]',
    errorMessages: '.error-messages'
}