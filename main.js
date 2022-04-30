var Dog = 0;
var Cat = 0;
var Cow = 0;
var Lion = 0;

function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QPsc67QIS/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults)
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;
        document.getElementById("name_of_animal").innerHTML = 'I can hear a '+results[0].label;
        document.getElementById("number_of_times").innerHTML = 'Can hear dog'+Dog+','+'Can hear cat'+Cat;
        document.getElementById("name_of_animal").style.color = "rgb("+random_number_r+','+random_number_b+','+random_number_g+')';
        document.getElementById("number_of_times").style.color = "rgb("+random_number_r+','+random_number_b+','+random_number_g+')';

        img = document.getElementById('Ear image.jpg');

        if(results[0].label == "Barking")
        {
            img.src = 'Dog image.jpg'
            Dog = Dog+1;
        }

        else if(results[0].label == "Meowing")
        {
            img.src = 'Cat image.jpg'
            Cat = Cat+1;
        }

        else if(results[0].label == "Mooing")
        {
            img.src = 'Dog image.jpg'
            Dog = Dog+1;
        }

        else(results[0].label == "Roaring")
        {
            img.src = 'Cat image.jpg'
            Cat = Cat+1;
        }
    }
}