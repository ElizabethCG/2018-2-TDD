describe("Testear isEmail", ()=>{
  it("Debería, si no tiene arroba, retornar false",()=>{
    const elResultado = isEmail('asdfasdf.com');
    assert.equal(elResultado, false);
  });
  it("Debería el correo tener un arroba", ()=>{
    const elResultado = isEmail('asdf@asdf.com');
    assert.equal(elResultado, true);
  });
  it("Debería tener un punto después del arroba", ()=>{
    const elResultado = isEmail('as.df@asdfcom');
    assert.equal(elResultado, false);
  });
  it("Debería tener al menos un caracter a la izquierda del arroba", ()=>{
    assert.equal(isEmail('@a.com'), false);
  });
});