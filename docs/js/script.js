let btn_share = document.getElementById('btn_share');
let desktop_social_anchor = document.querySelector('.desktop_social_anchor');
let hoverup_avatar_anchor = document.querySelector('.hoverup_avatar_anchor');
let social_holder = document.querySelector('.social_holder');
let avatar_icon = document.querySelector('.avatar_icon');
let avatar = '';
let sts = '';

function social_column_handler(sts) {
    switch(sts) {
        case "mobile":
            if(btn_share.classList.contains('mobile_clicked')) {
                social_holder.classList.remove('mobile_active');
                btn_share.classList.remove('mobile_clicked');
            }
            else {
                social_holder.classList.add('mobile_active');
                btn_share.classList.add('mobile_clicked');
            }
            desktop_social_anchor.classList.remove('desktop_active');
            social_holder.classList.remove('desktop_active');
            btn_share.classList.remove('desktop_clicked');
        break;
        case "desktop":
            if(btn_share.classList.contains('desktop_clicked')) {
                social_holder.classList.remove('desktop_active');
                btn_share.classList.remove('desktop_clicked');
                desktop_social_anchor.classList.remove('desktop_active');
            }
            else {
                social_holder.classList.add('desktop_active');
                btn_share.classList.add('desktop_clicked');
                desktop_social_anchor.classList.add('desktop_active');
            }
            social_holder.classList.remove('mobile_active');
            btn_share.classList.remove('mobile_clicked');
        break;
    }
}

btn_share.addEventListener('click', function() {

    if(window.innerWidth<=1439) {
        sts = "mobile";        
        social_column_handler(sts);
    }
    else {
        sts = "desktop";        
        social_column_handler(sts);
    }
});

avatar_icon.addEventListener('mouseover', function() {
    avatar="in_hover";

    if(!document.querySelectorAll('#hoverup_avt_img').length>=1) {
        setTimeout(() => {
            if(avatar=="in_hover") {
                let hoverup_avt_img = document.createElement('img');
                hoverup_avatar_anchor.style.display = "flex";
                hoverup_avatar_anchor.appendChild(hoverup_avt_img);
                hoverup_avt_img.id = "hoverup_avt_img";
                hoverup_avt_img.src = avatar_icon.src;
            }
        }, 350);
    }
});

avatar_icon.addEventListener('mouseout', function() {
    avatar="hover_out";
    
    if(document.querySelector('#hoverup_avt_img')) {
        document.querySelector('#hoverup_avt_img').remove();
        hoverup_avatar_anchor.style.display = "none";
    }
});