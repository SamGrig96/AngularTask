 let modal = document.getElementById("myModal");

        let cancelBtn = document.getElementById("cancelBtn");

        let retryBtn = document.getElementById('retryBtn');

        let defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let myArr = [...defaultArray];

        function getRandomNumber() {
            if (myArr.length === 0) {
                modal.style.display = "block";
            } else {
                let myRandomNumber = Math.floor(Math.random() * myArr.length);
                let index = myArr.indexOf(myArr[myRandomNumber])
                document.getElementById("main").innerHTML = myArr[index];
                myArr.splice(index, 1);
            }
        }

        cancelBtn.onclick = function () {
            modal.style.display = "none";
        }

        retryBtn.onclick = function () {
            modal.style.display = "none";
            myArr = [...defaultArray];
            document.getElementById("main").innerHTML = '';
        }