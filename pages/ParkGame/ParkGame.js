import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {parkCodes, SIZES} from '../../constants';
import CacheImage from '../../components/CacheImage';
import {generateAnswers} from './utils';

const parksArr = Object.values(parkCodes);

const ParkGame = () => {
  const [questions, setQuestions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(-1);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const quesTemp = [];
    for (let i = 0; i <= 5; i++) {
      const p = parksArr[Math.floor(Math.random() * parksArr.length)];
      quesTemp.push({name: p.fullName, url: p.image.url});
    }
    setQuestions(quesTemp);
  }, []);

  useEffect(() => {
    if (!questions.length || !correctCount) {
      return;
    }
    let newQs = questions;
    const p = parksArr[Math.floor(Math.random() * parksArr.length)];
    newQs.shift();
    newQs.push({name: p.fullName, url: p.image.url});
    setQuestions(newQs);
    setAnswers(generateAnswers(questions[0]));
  }, [correctCount, questions]);

  if (!questions.length) {
    return null;
  }

  const currentQuestion = questions[0];

  console.log(questions);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {questions.map((opt, i) => (
          <CacheImage uri={opt.url} style={{height: 0}} />
        ))}
      </View>

      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View>
          <Text>Current Streak: {correctCount}</Text>
          <Text>Record: 1</Text>
        </View>
        <View style={{flex: 1}}>
          <CacheImage
            uri={currentQuestion.url}
            style={{height: '100%', borderRadius: 20}}
          />
        </View>
        <View style={{flex: 1, flexWrap: 'wrap', marginVertical: 10}}>
          {answers.map((opt, i) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 2,
                  marginVertical: 5,
                  flexGrow: 1,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  padding: 10,
                  backgroundColor:
                    showAnswer === i
                      ? opt.correct
                        ? 'green'
                        : 'red'
                      : 'white',
                }}
                onPress={() => {
                  if (opt.correct) {
                    setShowAnswer(i);
                    setTimeout(() => {
                      setCorrectCount(correctCount + 1);
                      setShowAnswer(-1);
                    }, 500);
                  } else {
                    setShowAnswer(i);
                    setTimeout(() => {
                      setCorrectCount(0);
                      setShowAnswer(-1);
                    }, 500);
                  }
                }}>
                <Text style={{fontWeight: '700', textAlign: 'center'}}>
                  {opt.name} {opt.correct && 'T'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ParkGame;

const styles = StyleSheet.create({});
