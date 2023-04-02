function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More info").removeClass("active")
    } else {
        $(target).html("Less info").addClass("active")
    }


    const item = $(e.target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

    function onFormSubmit(e) {
        e.preventDefault() 
        const email = $("#inp_email")
        const subject = $("#inp_subject")
        const message = $("#inp_message")

        if(!$(email).val()) {
            alert("Email is Required")
        } else if (!$(subject).val()) {
            alert("Subject is Required")
        } else if (!$(message).val()) {
            alert("Message is Required")
        } else {
            alert("Form Submitted")
            $(email).val("")
            $(subject).val("")
            $(message).val("")
        }
    }
