import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, parkCodes, SIZES} from '../../constants';
import CacheImage from '../../components/CacheImage';
import {generateAnswers} from './utils';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const parksArr = Object.values(parkCodes);

const ParkGame = () => {
  const {getItem, setItem} = useAsyncStorage('@game-record');
  const [questions, setQuestions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [record, setRecord] = useState(0);

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setRecord(newValue);
  };

  useEffect(() => {
    const readItemFromStorage = async () => {
      const item = await getItem();
      setRecord(item);
    };
    readItemFromStorage();
  }, [getItem]);

  useEffect(() => {
    const quesTemp = [];
    for (let i = 0; i <= 5; i++) {
      const p = parksArr[Math.floor(Math.random() * parksArr.length)];
      quesTemp.push({name: p.fullName, url: p.image.url});
    }
    setQuestions(quesTemp);
  }, []);

  useEffect(() => {
    if (!questions.length) {
      return;
    }
    if (correctCount > record) {
      // update record in storage
      writeItemToStorage(correctCount + '');
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
        <Text style={styles.titleText}>Guess that Park</Text>

        <View style={styles.statsRow}>
          <Text style={styles.statText}>Streak: {correctCount}</Text>
          {!!record && <Text style={styles.statText}>Record: {record}</Text>}
        </View>

        <CacheImage uri={currentQuestion.url} style={styles.mainImage} />

        <View style={styles.answersContain}>
          {answers.map((opt, i) => {
            return (
              <TouchableOpacity
                style={[
                  styles.answerOpt,
                  {
                    backgroundColor:
                      showAnswer === i
                        ? opt.correct
                          ? COLORS.transparentGreen
                          : COLORS.transparentRed
                        : COLORS.lightGray,
                  },
                ]}
                onPress={() => {
                  if (opt.correct) {
                    setShowAnswer(i);
                    setTimeout(() => {
                      setCorrectCount(correctCount + 1);
                      setShowAnswer(-1);
                    }, 250);
                  } else {
                    setShowAnswer(i);
                    setTimeout(() => {
                      setCorrectCount(0);
                      setShowAnswer(-1);
                    }, 250);
                  }
                }}>
                <Text style={styles.answerText}>
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

const styles = StyleSheet.create({
  titleText: {
    fontWeight: '700',
    fontSize: 30,
    color: COLORS.darkGreen,
    textAlign: 'center',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  statText: {fontWeight: '600', fontSize: 20},
  mainImage: {height: '100%', borderRadius: 20, flex: 1},
  answersContain: {flex: 1, flexWrap: 'wrap', marginVertical: 10},
  answerOpt: {
    flex: 1,
    borderWidth: 0.2,
    marginVertical: 5,
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
  },
  answerText: {fontWeight: '700', textAlign: 'center'},
});
