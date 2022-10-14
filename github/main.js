feather.replace();

const inputEl = document.querySelector('#username-input');
const buttonEl = document.querySelector('#username-button');
const reposEl = document.querySelector('#repos-list');
const avataresEl = document.querySelector('#avatares');

let data = [];
let avatares = [];

buttonEl.onclick = () => {

   if (inputEl.value.length > 0) {
      displayRepos();
      inputEl.value = '';
   } else {
      alert('Please enter a username');
   }
}

const displayRepos = async () => {

   const res = await fetch(`https://api.github.com/users/${inputEl.value}/repos`, {
      headers: {
         'Authorization': 'token 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'
      }
   }
   );

   console.log(res);
   if (res.length === 0) {
      alert('User not found');
      return;
   }


   const repos = await res.json();
   console.log(repos);

   avatares.push([repos[0].owner.avatar_url, repos[0].owner.html_url]);
   console.log(avatares);
   updateAvatar(avatares);

   reposEl.innerHTML = '';

   repos.forEach(repo => {

      if (repo.description === null) {
         repo.description = 'Sem descrição';
      }

      if (repo.language === null) {
         repo.language = 'Sem linguagem';
         
      }

      const html = `
      <div class="repo">
         <h3>${repo.name}</h3>
         <p>${repo.description}</p>
         <p>${repo.language}</p>
      </div>

      `;
      reposEl.innerHTML += html;
   });

}

const updateAvatar = async (avatares) => {

   avataresEl.innerHTML = '';
   avatares.forEach(avatar => {
      const html = `
         <a href="${avatar[1]}" target="_blank">
            <img class="avatar" src="${avatar[0]}" alt="avatar">
         </a>
      `;
      console.log(html);
      avataresEl.innerHTML += html;
   }
   );

}

console.log('Hello World!');