import { login, logout } from '../../actions/auth';


test('should generate login action object', () => {
    const uid = 'abc123'
    const actions = login(uid);
     expect(actions).toEqual({
       type: 'LOGIN',
       uid: 'abc123'
     });
});


test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
});