 const gradepoints = {
        O: 10,
        "A+": 9,
        A: 8,
        "B+": 7,
        B: 6,
        C: 5,
        F: 0,
      };

      function generatesubject() {
        let number = document.getElementById("numsubject").value;
        let subject = document.querySelector(".subject");
        subject.classList.remove("show");
        subject.innerHTML = "";
        for (let i = 1; i <= number; i++) {
          subject.innerHTML += `
    <div>
        Subject ${i} : 
        Credits : <input type="number" class="box" id="credits${i}" step="1" placeholder="Enter Credits" />
        Grade : 
        <select id="grade${i}" class="select" name="grade${i}">
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="F">F</option>
        </select>
    `;
        }
        subject.innerHTML += `
  <button class="generate box" onclick="calculateCGPA()">
    Calculate CGPA
  </button>
      </div>

`;
        setTimeout(() => {
          subject.classList.add("show");
        }, 50);
      }

      function calculateCGPA() {
        let prvgpa = parseFloat(document.getElementById("prvgpa").value) || 0;
        let prvcredit =
          parseFloat(document.getElementById("prvcredit").value) || 0;

        let number = document.getElementById("numsubject").value;

        let totalcredits = 0;
        let totalpoints = 0;

        for (let i = 1; i <= number; i++) {
          let cradit =
            parseFloat(document.getElementById(`credits${i}`).value) || 0;
          let grade = document.getElementById(`grade${i}`).value;

          totalcredits += cradit;
          totalpoints += cradit * gradepoints[grade];
        }
        let sgpa = totalpoints / totalcredits;
        let cgpa =
          (prvgpa * prvcredit + sgpa * totalcredits) /
          (prvcredit + totalcredits);

        document.getElementsByClassName("result")[0].innerHTML = `
        <h2>Result :</h2>
        <ul>
          <li>SGPA : ${sgpa.toFixed(2)}</li>
          <li>CGPA : ${cgpa.toFixed(2)}</li>
        </ul>
      `;
      }