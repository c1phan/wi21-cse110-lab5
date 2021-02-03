// global values/variables
let v_image = document.getElementById("volume-image");
let v_slider = document.getElementById("volume-slider");
let v_number = document.getElementById("volume-number");
let party_horn = document.getElementById("radio-party-horn");
let car_horn = document.getElementById("radio-car-horn");
let air_horn = document.getElementById("radio-air-horn");
let audio = document.getElementById("horn-sound");
let sound_image = document.getElementById("sound-image");
let honk_btn = document.getElementById("honk-btn");
let form = document.getElementById("party-horn-form")

// if any id's are changed, their helper function will be called
v_slider.addEventListener("input", update_v_number);
v_number.addEventListener("input", update_v_slider);
party_horn.addEventListener("change", update_party_horn);
car_horn.addEventListener("change", update_car_horn);
air_horn.addEventListener("change", update_air_horn);
form.addEventListener("submit", play_audio);

// Updates v_image's src path based on the selected v_number
function update_v_image() {
    if (v_number.value >= 67) {
        v_image.src = "./assets/media/icons/volume-level-3.svg";
    } else if (v_number.value <= 66 && v_number.value >= 34) {
        v_image.src = "./assets/media/icons/volume-level-2.svg";
    } else if (v_number.value <= 33 && v_number.value >= 1) {
        v_image.src = "./assets/media/icons/volume-level-1.svg";
    } else if (v_number.value == 0) {
        v_image.src = "./assets/media/icons/volume-level-0.svg";
        honk_btn.disabled = true;
    }

    // Edge case so that when v_number is greater than 0, it'll enable the honk_btn
    if (v_number.value > 0) {
        honk_btn.disabled = false;
    }
}

// When v_slider is changed, it will also change the v_number.
function update_v_number() {
    v_number.value = v_slider.value;
    audio.volume = v_number.value / 100
    update_v_image();
}

// When v_number is changed, it will also change the v_slider.
function update_v_slider() {
    v_slider.value = v_number.value;
    audio.volume = v_slider.value / 100
    update_v_image();
}

// This will change the audio & image to party horn's audio and image, when the radio button
// is on party_horn.
function update_party_horn() {
    audio.src = "./assets/media/audio/party-horn.mp3";
    sound_image.src = "./assets/media/images/party-horn.svg";
}

// This will change the audio & image to car horn's audio and image, when the radio button
// is on car_horn.
function update_car_horn() {
    audio.src = "./assets/media/audio/car-horn.mp3";
    sound_image.src = "./assets/media/images/car.svg";
}

// This will change the audio & image to air horn's audio and image, when the radio button
// is on air_horn.
function update_air_horn() {
    audio.src = "./assets/media/audio/air-horn.mp3";
    sound_image.src = "./assets/media/images/air-horn.svg";
}

// this will honk the chosen horn
function play_audio(event) {
    event.preventDefault();
    audio.play();
}
