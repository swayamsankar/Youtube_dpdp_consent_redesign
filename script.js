  const total = 9;
  const stepper = document.getElementById('stepper');
  for(let i=1;i<=total;i++){
    const d = document.createElement('div');
    d.className = 'dot';
    d.id = 'dot-'+i;
    stepper.appendChild(d);
  }

  let current = 1;
  let historyStack = []; // remembers the actual path taken, so "back" always returns to where you came from

  function render(n){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.querySelector('.screen[data-screen="'+n+'"]').classList.add('active');
    document.querySelectorAll('.dot').forEach((d,i)=>{
      d.classList.remove('active','done');
      if(n > total){ d.classList.add('done'); return; } // alternate/quick-setup screen: show path as bridged
      if(i+1 < n) d.classList.add('done');
      if(i+1 === n) d.classList.add('active');
    });
    document.querySelector('.phone').scrollTo?.(0,0);
    current = n;
  }

  function go(n){
    historyStack.push(current); // remember where we're navigating from
    render(n);
  }

  function goBack(){
    if(historyStack.length === 0) return; // already at the start, nothing to go back to
    const prev = historyStack.pop();
    render(prev);
  }

  render(1);
