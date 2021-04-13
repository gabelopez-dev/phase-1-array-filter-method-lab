// Code your solution here
findMatching(function () 
describe('index.js', function () {
    describe('findMatching()', function () {
      it('returns all drivers that match the passed in name', function () {
        const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
  
        expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
        expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
      });