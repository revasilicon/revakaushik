# Frontend Interview Preparation Guide - SEED Projects

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Frontend Architecture](#frontend-architecture)
4. [React.js Best Practices](#reactjs-best-practices)
5. [React Native Best Practices](#react-native-best-practices)
6. [Common Components & Patterns](#common-components--patterns)
7. [Interview Questions & Answers](#interview-questions--answers)
8. [Coding Challenges](#coding-challenges)
9. [Performance Optimization](#performance-optimization)
10. [Security Best Practices](#security-best-practices)

---

## Project Overview

### SEED Projects Portfolio
The SEED projects consist of 5 main applications:
1. **SEED eLearning Portal** (hu_seed_elearning_w)
2. **SEED MIS** (hu_seed_mis)
3. **Hungary ESL MIS** (hungarymis)
4. **Hungary MIS Admissions Portal** (hungaryadm)
5. **Hungary eLearning Portal** (hungaryelearning)

### Frontend Scope
All projects require:
- **ReactJS:** Web-based user interfaces
- **React Native:** Mobile app development (optional for some projects)
- **Responsive Design:** Support for multiple screen sizes
- **Multi-language Support:** English and Hungarian
- **Real-time Updates:** Socket.io integration
- **Authentication:** JWT token management
- **File Upload/Download:** Media and document handling

---

## Technology Stack

### Frontend Technologies
```
ReactJS (Web):
├── React 16.x or higher
├── Redux/Context API (State Management)
├── React Router (Navigation)
├── Axios (HTTP Requests)
├── Socket.io Client (Real-time)
├── Material-UI or Tailwind CSS (Styling)
└── Jest & React Testing Library (Testing)

React Native (Mobile):
├── React Native 0.60+
├── Redux (State Management)
├── React Navigation (Navigation)
├── Axios (HTTP Requests)
├── Socket.io Client (Real-time)
└── Jest & React Native Testing Library (Testing)

Common Libraries:
├── Moment.js (Date/Time)
├── react-i18next (Internationalization)
├── react-hook-form (Form Management)
├── react-query (Data Fetching)
└── jwt-decode (JWT Handling)
```

### Build Tools & DevOps
- **Bundler:** Webpack / Vite
- **Task Runner:** npm scripts / Gulp
- **Linter:** ESLint
- **Formatter:** Prettier
- **Version Control:** Git
- **Package Manager:** npm / yarn
- **CI/CD:** GitHub Actions / Jenkins

---

## Frontend Architecture

### Component Structure

```
src/
├── components/
│   ├── Common/
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   └── Loading.jsx
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── PasswordReset.jsx
│   │   └── ProtectedRoute.jsx
│   ├── Learner/
│   │   ├── LearnerDashboard.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── QuizModule.jsx
│   │   └── ProgressTracker.jsx
│   ├── Admin/
│   │   ├── AdminDashboard.jsx
│   │   ├── UserManagement.jsx
│   │   ├── ContentModeration.jsx
│   │   └── Analytics.jsx
│   ├── Forms/
│   │   ├── FormBuilder.jsx
│   │   ├── FormField.jsx
│   │   └── DynamicForm.jsx
│   └── Media/
│       ├── VideoPlayer.jsx
│       ├── VideoUpload.jsx
│       └── MediaGallery.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── DashboardPage.jsx
│   ├── CourseListPage.jsx
│   └── NotFoundPage.jsx
├── services/
│   ├── apiClient.js
│   ├── authService.js
│   ├── courseService.js
│   ├── userService.js
│   └── socketService.js
├── hooks/
│   ├── useAuth.js
│   ├── useCourse.js
│   ├── useFetch.js
│   └── useLocalStorage.js
├── store/
│   ├── authSlice.js
│   ├── courseSlice.js
│   ├── uiSlice.js
│   └── store.js
├── utils/
│   ├── axiosConfig.js
│   ├── tokenManager.js
│   ├── constants.js
│   └── helpers.js
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── responsive.css
└── App.jsx
```

### Data Flow Pattern (Redux)

```
User Action → Dispatch Action → Reducer → State Update → Component Re-render
                                    ↓
                            Middleware (Thunks/Sagas)
                                    ↓
                            API Call (apiClient)
```

### Authentication Flow

```
1. User logs in with credentials
   ↓
2. API returns JWT token (access + refresh)
   ↓
3. Token stored in localStorage / sessionStorage
   ↓
4. Token included in Authorization header for subsequent requests
   ↓
5. If token expires, refresh token is used to get new access token
   ↓
6. If refresh token expires, user is logged out
```

---

## React.js Best Practices

### 1. Functional Components & Hooks

**Good Practice:**
```jsx
import React, { useState, useEffect } from 'react';

const CourseCard = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const response = await courseService.getCourse(courseId);
      setCourse(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <ProgressBar value={course.progress} />
    </div>
  );
};

export default CourseCard;
```

### 2. Custom Hooks

**Example - useAuth Hook:**
```jsx
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken, logout } from '../store/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector(state => state.auth);

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      return response.data;
    } catch (error) {
      throw new Error('Login failed: ' + error.message);
    }
  };

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout: logoutUser
  };
};
```

### 3. Protected Routes

**Example - ProtectedRoute Component:**
```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
```

### 4. Conditional Rendering

**Best Practices:**
```jsx
// Good - Use ternary for simple conditions
return isLoading ? <Loading /> : <Content />;

// Good - Use logical AND for single condition
return hasPermission && <AdminPanel />;

// Good - Use early returns
if (!user) return <LoginPrompt />;
if (isError) return <ErrorMessage error={error} />;
return <UserProfile user={user} />;

// Avoid - Complex nested ternaries
// return isLoading ? <Loading /> : hasData ? <Data /> : <Empty />;
```

### 5. Performance Optimization

**Memoization:**
```jsx
import React, { useMemo, useCallback } from 'react';

const CourseList = ({ courses, onCourseSelect }) => {
  // Memoize expensive computation
  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) => a.title.localeCompare(b.title));
  }, [courses]);

  // Memoize callback to prevent unnecessary re-renders of child components
  const handleSelect = useCallback((courseId) => {
    onCourseSelect(courseId);
  }, [onCourseSelect]);

  return (
    <ul>
      {sortedCourses.map(course => (
        <CourseItem 
          key={course.id} 
          course={course}
          onSelect={handleSelect}
        />
      ))}
    </ul>
  );
};

export default React.memo(CourseList);
```

---

## React Native Best Practices

### 1. Project Structure

```
src/
├── screens/
│   ├── AuthScreens/
│   │   ├── LoginScreen.js
│   │   └── RegisterScreen.js
│   ├── LearnerScreens/
│   │   ├── DashboardScreen.js
│   │   ├── CourseDetailScreen.js
│   │   └── QuizScreen.js
│   └── AdminScreens/
│       └── AdminDashboard.js
├── components/
│   ├── CourseCard.js
│   ├── VideoPlayer.js
│   └── ProgressBar.js
├── navigation/
│   ├── AuthNavigator.js
│   ├── AppNavigator.js
│   └── RootNavigator.js
├── services/
│   └── apiClient.js
├── store/
│   └── store.js
└── utils/
    ├── constants.js
    └── helpers.js
```

### 2. Navigation Setup

**Example - React Navigation:**
```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './hooks/useAuth';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
  </Stack.Navigator>
);

export const RootNavigator = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
```

### 3. API Integration in React Native

```jsx
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('authToken');
      // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### 4. Responsive Design in React Native

```jsx
import { useWindowDimensions } from 'react-native';

const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  
  return {
    isSmall: width < 375,
    isMedium: width >= 375 && width < 768,
    isLarge: width >= 768,
    width,
    height
  };
};

// Usage
const CourseCard = () => {
  const { isMedium, isLarge } = useResponsive();
  
  return (
    <View style={{ paddingHorizontal: isLarge ? 20 : 10 }}>
      {/* Content */}
    </View>
  );
};
```

---

## Common Components & Patterns

### 1. Authentication Component Pattern

**Web (ReactJS):**
```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
```

**Mobile (React Native):**
```jsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
```

### 2. Data Fetching Pattern

```jsx
// Custom Hook - useFetch
import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('API Error');
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
};

// Usage
const CourseList = () => {
  const { data: courses, loading, error } = useFetch('/api/courses');
  
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  
  return courses.map(course => <CourseCard key={course.id} course={course} />);
};
```

### 3. Form Handling with react-hook-form

```jsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const CourseForm = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: '',
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={{ required: 'Title is required' }}
        render={({ field }) => (
          <input 
            {...field}
            placeholder="Course Title"
          />
        )}
      />
      {errors.title && <span>{errors.title.message}</span>}

      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required' }}
        render={({ field }) => (
          <textarea {...field} placeholder="Description" />
        )}
      />
      {errors.description && <span>{errors.description.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
```

---

## Interview Questions & Answers

### React.js Questions

#### Q1: What is the difference between state and props?

**Answer:**
```
Props (Properties):
- Read-only data passed from parent to child
- Cannot be modified by child component
- Used for configuring components
- Example: <CourseCard course={courseData} />

State:
- Data managed within a component
- Can be modified using setState/hooks
- Triggers re-render when changed
- Local to the component

Example:
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <ChildComponent count={count} /> {/* props */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

const ChildComponent = ({ count }) => {
  return <p>Count: {count}</p>;
};
```

#### Q2: Explain React lifecycle methods and hooks equivalents

**Answer:**
```
Class Components → Functional Components with Hooks

componentDidMount() → useEffect(() => {...}, [])
componentDidUpdate() → useEffect(() => {...}, [dependency])
componentWillUnmount() → useEffect(() => { return () => {...} }, [])
shouldComponentUpdate() → React.memo()

Example:
class ClassComponent extends React.Component {
  componentDidMount() {
    // Runs once after render
  }
  
  componentDidUpdate(prevProps) {
    // Runs after every render
  }
  
  componentWillUnmount() {
    // Cleanup before unmount
  }
}

// Equivalent with hooks:
function FunctionComponent() {
  useEffect(() => {
    console.log('Mounted and updated');
    
    return () => {
      console.log('Cleanup before unmount');
    };
  }, []);
}
```

#### Q3: What is Redux and how does it work?

**Answer:**
```
Redux is a predictable state management library:

Core Concepts:
1. Store: Single source of truth (state container)
2. Action: Plain object describing what happened
3. Reducer: Pure function that returns new state
4. Dispatch: Sends action to reducer

Flow:
User Action → dispatch(action) → reducer → new state → component re-render

Example:
// Action
const incrementCounter = () => ({
  type: 'INCREMENT',
  payload: 1
});

// Reducer
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload;
    default:
      return state;
  }
};

// Usage in component
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);
  
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(incrementCounter())}>
        Increment
      </button>
    </>
  );
};
```

#### Q4: What is the Virtual DOM and why is it important?

**Answer:**
```
Virtual DOM:
- JavaScript representation of the actual DOM
- React creates a virtual copy of the UI
- When state changes, React creates new Virtual DOM
- Compares new Virtual DOM with previous one (diffing)
- Updates only changed elements in real DOM (reconciliation)

Benefits:
1. Performance: Only necessary DOM updates
2. Abstraction: Developers don't manipulate DOM directly
3. Consistency: UI stays in sync with state

Example:
State Change → New Virtual DOM → Diff Algorithm 
→ Identify Changes → Update Real DOM
```

#### Q5: How do you handle authentication in React?

**Answer:**
```
Authentication Flow:

1. User logs in with credentials
const login = async (email, password) => {
  const response = await apiClient.post('/auth/login', { email, password });
  const { token, user } = response.data;
  
  // Store token
  localStorage.setItem('token', token);
  
  // Store user data in Redux/Context
  dispatch(setUser(user));
};

2. Store token in localStorage
const token = localStorage.getItem('token');

3. Include token in API requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

4. Protect routes with ProtectedRoute
<ProtectedRoute requiredRole="admin">
  <AdminDashboard />
</ProtectedRoute>

5. Handle token expiration
apiClient.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

#### Q6: Explain React Router and how to implement navigation

**Answer:**
```
React Router:
- Library for client-side navigation
- Keeps UI in sync with URL
- Enables SPA (Single Page Application) navigation

Setup:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/admin" element={
        <ProtectedRoute requiredRole="admin">
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

Navigation:
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ courseId }) => {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate(`/courses/${courseId}`)}>
      View Course
    </button>
  );
};
```

#### Q7: What are controlled and uncontrolled components?

**Answer:**
```
Controlled Component:
- React state controls the input value
- Value comes from state
- onChange updates state
- Predictable behavior

Example:
const [email, setEmail] = useState('');

return (
  <input 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
);

Uncontrolled Component:
- Form data handled by DOM itself
- Access value using useRef
- Less common in React
- More like traditional HTML

Example:
const emailRef = useRef();

const handleSubmit = () => {
  console.log(emailRef.current.value);
};

return (
  <>
    <input ref={emailRef} />
    <button onClick={handleSubmit}>Submit</button>
  </>
);

Recommendation: Use controlled components for most cases
```

### React Native Questions

#### Q1: What is React Native and what are its advantages?

**Answer:**
```
React Native:
- JavaScript framework to build native mobile apps
- Share code between iOS and Android
- Uses native components (not web views)

Advantages:
1. Code Reusability: Share 60-80% code between platforms
2. Development Speed: Faster than native development
3. Hot Reload: See changes instantly
4. Large Community: Lots of libraries and support
5. Cost Effective: One team, two platforms

Disadvantages:
1. Performance: Slightly slower than native
2. Platform Specific Issues: Some features need platform code
3. Native Dependencies: May need native modules
4. Large App Size: React Native apps are larger
```

#### Q2: Explain React Navigation

**Answer:**
```
React Navigation:
- Routing and navigation library for React Native
- Stack, Tab, and Drawer navigation

Types:
1. Stack Navigator: Sequential screen navigation (like browser back)
2. Tab Navigator: Tab-based navigation
3. Drawer Navigator: Drawer menu navigation

Example:
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CoursesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CourseList" component={CourseListScreen} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
  </Stack.Navigator>
);

const DashboardTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Courses" component={CoursesStack} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
```

#### Q3: How do you handle async storage in React Native?

**Answer:**
```
AsyncStorage:
- Key-value storage for React Native
- Persistent data storage (like localStorage in web)

Operations:
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
const saveData = async () => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  } catch (error) {
    console.error('Save failed:', error);
  }
};

// Retrieve data
const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Retrieve failed:', error);
  }
};

// Remove data
const removeData = async () => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.error('Remove failed:', error);
  }
};

// Clear all
const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Clear failed:', error);
  }
};

// Usage in component
import { useEffect, useState } from 'react';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await getData();
      setUser(userData);
    };
    loadUser();
  }, []);

  return user ? <UserProfile user={user} /> : <Loading />;
};
```

---

## Coding Challenges

### Challenge 1: Implement a Quiz Component

```jsx
// QuizComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizComponent = ({ quiz, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerSelect = (answerIndex) => {
    const isCorrect = answerIndex === quiz.questions[currentQuestion].correctAnswer;
    
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    const results = {
      quizId: quiz.id,
      score: score,
      totalQuestions: quiz.questions.length,
      percentage: (score / quiz.questions.length) * 100,
      answers: selectedAnswers
    };
    
    onComplete(results);
    navigate('/quiz-results', { state: { results } });
  };

  const question = quiz.questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="quiz-content">
        <h3>Question {currentQuestion + 1} of {quiz.questions.length}</h3>
        <h4>{question.text}</h4>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>

        <button 
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className="next-button"
        >
          {currentQuestion === quiz.questions.length - 1 ? 'Submit' : 'Next'}
        </button>

        <div className="quiz-info">
          Current Score: {score}/{quiz.questions.length}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
```

### Challenge 2: Implement a Course Filter and Search

```jsx
// CourseFilter.jsx
import React, { useState, useMemo } from 'react';

const CourseFilter = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  const filteredAndSortedCourses = useMemo(() => {
    let result = [...courses];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(course => course.category === selectedCategory);
    }

    // Sort
    switch(sortBy) {
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    return result;
  }, [courses, searchTerm, selectedCategory, sortBy]);

  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <div className="filter-container">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-section">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="title">Sort by Title</option>
          <option value="rating">Sort by Rating</option>
          <option value="newest">Sort by Newest</option>
        </select>
      </div>

      <div className="results">
        <h4>Found {filteredAndSortedCourses.length} courses</h4>
        <div className="courses-grid">
          {filteredAndSortedCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
```

### Challenge 3: Implement Error Boundary

```jsx
// ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    console.error('Error caught:', error, errorInfo);
    // Log error to service
  }

  resetError = () => {
    this.setState({ 
      hasError: false, 
      error: null,
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong!</h2>
          <details>
            {this.state.error?.toString()}
            <pre>{this.state.errorInfo?.componentStack}</pre>
          </details>
          <button onClick={this.resetError}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Usage
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## Performance Optimization

### 1. Code Splitting

```jsx
import React, { lazy, Suspense } from 'react';

// Lazy load components
const AdminDashboard = lazy(() => import('./AdminDashboard'));
const CourseList = lazy(() => import('./CourseList'));

const App = () => (
  <Routes>
    <Route 
      path="/admin" 
      element={
        <Suspense fallback={<Loading />}>
          <AdminDashboard />
        </Suspense>
      } 
    />
    <Route 
      path="/courses" 
      element={
        <Suspense fallback={<Loading />}>
          <CourseList />
        </Suspense>
      } 
    />
  </Routes>
);
```

### 2. Image Optimization

```jsx
// Use responsive images
<img
  src={optimizedImageUrl}
  srcSet={`
    ${image320} 320w,
    ${image640} 640w,
    ${image1280} 1280w
  `}
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Course"
/>

// Lazy load images
<img
  loading="lazy"
  src={courseImage}
  alt="Course"
/>
```

### 3. API Call Optimization

```jsx
// Implement request caching
const useQuery = (queryKey, queryFn, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const cacheRef = useRef({});

  useEffect(() => {
    // Check cache first
    if (cacheRef.current[queryKey]) {
      setData(cacheRef.current[queryKey]);
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const result = await queryFn();
        cacheRef.current[queryKey] = result;
        setData(result);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryKey, queryFn]);

  return { data, isLoading };
};
```

### 4. Bundle Size Analysis

```bash
# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Use in webpack config
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
```

---

## Security Best Practices

### 1. JWT Token Management

```jsx
// Secure token storage
const tokenManager = {
  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },
  
  getToken: () => {
    return localStorage.getItem('authToken');
  },
  
  removeToken: () => {
    localStorage.removeItem('authToken');
  },
  
  isTokenExpired: (token) => {
    const decoded = jwt_decode(token);
    return decoded.exp * 1000 < Date.now();
  }
};
```

### 2. XSS Prevention

```jsx
// Use React's built-in XSS protection
// React escapes content by default
const userContent = "<img src=x onerror='alert(1)'>";
return <div>{userContent}</div>; // Safe: content is escaped

// Use dangerouslySetInnerHTML carefully
const sanitize = require('sanitize-html');
const cleanHtml = sanitize(userContent);
return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
```

### 3. CSRF Prevention

```jsx
// Include CSRF token in requests
const apiClient = axios.create({
  baseURL: API_URL
});

apiClient.interceptors.request.use((config) => {
  const token = document.querySelector('meta[name="csrf-token"]')?.content;
  if (token) {
    config.headers['X-CSRF-Token'] = token;
  }
  return config;
});
```

### 4. Secure Headers

```jsx
// Configure CSP headers on backend
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'"
  );
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});
```

### 5. Input Validation

```jsx
import { useForm, Controller } from 'react-hook-form';

const CourseForm = () => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <input {...field} type="email" />
            {error && <span>{error.message}</span>}
          </>
        )}
      />
    </form>
  );
};
```

---

## Multi-language Support (i18n)

```jsx
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

i18n.init({
  resources: {
    en: {
      translation: {
        greeting: 'Hello',
        courses: 'Courses',
        logout: 'Logout'
      }
    },
    hu: {
      translation: {
        greeting: 'Halló',
        courses: 'Tanfolyamok',
        logout: 'Kijelentkezés'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en'
});

// Component usage
const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <h1>{t('greeting')}</h1>
      <button onClick={() => i18n.changeLanguage('hu')}>
        Hungarian
      </button>
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </header>
  );
};
```

---

## Testing

### Unit Testing with Jest

```jsx
import { render, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';

describe('CourseCard', () => {
  it('renders course title', () => {
    const course = {
      id: 1,
      title: 'React Basics',
      description: 'Learn React'
    };

    render(<CourseCard course={course} />);
    expect(screen.getByText('React Basics')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const mockClick = jest.fn();
    render(
      <CourseCard 
        course={{ id: 1, title: 'React' }} 
        onClick={mockClick}
      />
    );

    screen.getByRole('button').click();
    expect(mockClick).toHaveBeenCalled();
  });
});
```

### Integration Testing

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';

describe('LoginForm Integration', () => {
  it('logs in user successfully', async () => {
    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });
});
```

---

## Common Mistakes to Avoid

1. **Missing keys in lists**
   ```jsx
   // Bad
   {items.map((item, index) => <Item key={index} />)}
   
   // Good
   {items.map(item => <Item key={item.id} />)}
   ```

2. **Setting state in render**
   ```jsx
   // Bad - causes infinite loop
   render() {
     this.setState({ data: value });
   }
   
   // Good - in useEffect
   useEffect(() => {
     setData(value);
   }, [value]);
   ```

3. **Not handling loading/error states**
   ```jsx
   // Good
   if (loading) return <Loading />;
   if (error) return <Error message={error} />;
   return <Content data={data} />;
   ```

4. **Not cleaning up in useEffect**
   ```jsx
   // Bad
   useEffect(() => {
     const unsubscribe = subscribe();
   }, []);
   
   // Good
   useEffect(() => {
     const unsubscribe = subscribe();
     return () => unsubscribe();
   }, []);
   ```

5. **Inline object/function props**
   ```jsx
   // Bad - recreates on every render
   <Component style={{ color: 'red' }} />
   <Component onClick={() => handleClick()} />
   
   // Good
   const style = { color: 'red' };
   const handleClick = useCallback(() => {...}, []);
   <Component style={style} onClick={handleClick} />
   ```

---

## Resources & References

### Official Documentation
- React: https://react.dev
- React Native: https://reactnative.dev
- Redux: https://redux.js.org
- React Router: https://reactrouter.com
- React Navigation: https://reactnavigation.org

### Learning Resources
- React Hooks Guide
- Redux Toolkit Documentation
- Material-UI Components
- React Testing Library
- Web Performance APIs

### Tools
- React DevTools Browser Extension
- Redux DevTools
- React Native Debugger
- Postman for API Testing
- Chrome DevTools

---

## Final Tips for Interview

1. **Understand Fundamentals:** Master React basics before advanced concepts
2. **Know Project Details:** Be familiar with actual project structure
3. **Prepare Examples:** Have real code examples from projects
4. **Practice Coding:** Solve algorithmic problems with React solutions
5. **Know Best Practices:** Be ready to explain why you choose certain patterns
6. **Ask Questions:** Clarify requirements before implementing
7. **Optimize Solutions:** Consider performance, maintainability, and security
8. **Test Your Code:** Know how to write tests for your components

---

## Quick Cheat Sheet

### React Hooks
```jsx
useState()        // State management
useEffect()       // Side effects
useContext()      // Context consumption
useReducer()      // Complex state
useCallback()     // Memoize functions
useMemo()         // Memoize values
useRef()          // Mutable reference
useCustomHook()   // Reusable logic
```

### Common Patterns
```jsx
// HOC
function withTheme(Component) {
  return (props) => <Component {...props} theme={theme} />;
}

// Render Props
<DataProvider render={data => <App data={data} />} />

// Custom Hook
const useAuth = () => { ... };

// Compound Components
<Form>
  <Form.Input />
  <Form.Submit />
</Form>
```

---

Last Updated: January 2026
Created for SEED Projects Interview Preparation
