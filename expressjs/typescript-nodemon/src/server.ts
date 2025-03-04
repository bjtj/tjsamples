import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { errorHandler } from './error-handler/error-handler';
import { ErrorCode } from './error-handler/error-code';
import { ErrorException } from './error-handler/error-exception';
import { ErrorModel } from './error-handler/error-model';
import { connect } from './models/db/mongoose-connection';
import { IUser, UserModel } from './models/db/user.db';
import { ulid } from 'ulid';
import { comparePassword, passwordHash } from './auth/password-hash';
import { generateAuthToken } from './auth/jwt';
import { authMiddleware } from './auth/auth.middleware'
import swaggerUi from 'swagger-ui-express';
import apispec from './jsdoc';

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apispec));

connect();

app.get('/', (req: Request, res: Response) => {
    // throw new Error('BROKEN'); // Express will catch this on its own.
    res.send('Application works!');
});

app.use(errorHandler); // registration of handler

app.get('/throw-unauthenticated', (req: Request, res: Response, next: NextFunction) => {
    throw new ErrorException(ErrorCode.Unauthenticated);
    // or
    // next(new ErrorException(ErrorCode.Unauthenticated))
});
app.get('/throw-maximum-allowed-grade', (req: Request, res: Response, next: NextFunction) => {
    throw new ErrorException(ErrorCode.MaximumAllowedGrade, { grade: Math.random() });
    // or
    // next(new ErrorException(ErrorCode.MaximumAllowedGrade, { grade: Math.random() }))
});
app.get('/throw-unknown-error', (req: Request, res: Response, next: NextFunction) => {
    const num: any = null;
    // Node.js will throw an error because there is no length property inside num variable
    console.log(num.length);
});

/**
 * @openapi
 * /sign-up:
 *   post:
 *     description: test api
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email
 *                 example: username@gmail.com
 *               name:
 *                 type: string
 *                 description: name
 *                 example: myname
 *               password:
 *                 type: string
 *                 description: password
 *                 example: mypass
 *     responses:
 *       200:
 *         description: sign-up result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 done:
 *                   type: boolean
 *                   description: done
 */
app.post('/sign-up', async (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password } = req.body;
    // check if user exists
    const userExists = await UserModel.findOne({ email: email });
    if (!!userExists) {
        next(new ErrorException(ErrorCode.DuplicateEntityError, { email }));
    }

    // generate password hash
    const hash = passwordHash(password);
    const newUser: IUser = {
        _id: ulid(),
        email,
        name,
        password: hash,
    };
    const created = await UserModel.create(newUser);
    res.send({ done: true });
});


/**
 * @openapi
 * /sign-in:
 *   post:
 *     description: test api
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email
 *                 example: username@gmail.com
 *               password:
 *                 type: string
 *                 description: password
 *                 example: mypass
 *     responses:
 *       200:
 *         description: sign-up result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: jwt token
 */
app.post('/sign-in', async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    // check if user exists
    const userExists = await UserModel.findOne({ email: email });
    if (!userExists) {
        next(new ErrorException(ErrorCode.Unauthenticated));
        return;
    }

    // validate the password
    const validPassword = comparePassword(password, userExists!.password);
    if (!validPassword) {
        next(new ErrorException(ErrorCode.Unauthenticated));
        return;
    }

    // generate the token
    const token = generateAuthToken(userExists!);

    res.send({ token });
});


/**
 * @openapi
 * /protected-route:
 *   get:
 *     description: protected route
 *     responses:
 *       200:
 *         description: content body
 */
app.get('/protected-route', authMiddleware, (req: Request, res: Response, next: NextFunction) => {
    // data from the token that is verified
    const tokenData = req.body.tokenData;
    console.log('tokenData', tokenData);
    res.send('this is a protected route');
});


app.listen(3000, () => {
    console.log('Application started on port 3000!');
});
