import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-gifted-charts';
import { TouchableOpacity } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get("window").width;
export default class CourseEvaluationReport extends Component {
  render() {
    const courseOutcomes = [["CO2", "CO4", "CO5"], ["CO7", "CO13", "CO14"]];
    const mappedCourses = ["PO7", "PO10", "PO12", "PO8", ];
    // Data for BarChart and LineChart
    const assessmentData = [
      { value: 60, label: 'Assignment', frontColor: '#A6CE39' },
      { value: 80, label: 'Quiz', frontColor: '#A6CE39' },
      { value: 40, label: 'Presentation', frontColor: '#A6CE39' },
      { value: 75, label: 'Lab', frontColor: '#A6CE39' },
      { value: 90, label: 'Viva', frontColor: '#A6CE39' },
    ];
    const pendingData = [
      {value: 40, label: 'Assignment', frontColor: '#D3D3D3'},
      {value: 20, label: 'Quiz', frontColor: '#D3D3D3'},
      {value: 60, label: 'Presentation', frontColor:'#D3D3D3'},
      {value: 25, label: 'Lab', frontColor:'#D3D3D3'},
      {value: 10, label: 'Viva', frontColor:'#D3D3D3'},
    ];
    const attendanceData = [
      { value: 25, label: '1/7' },
      { value: 55, label: '8/7' },
      { value: 20, label: '15/7' },
      { value: 78, label: '22/7' },
      { value: 50, label: '29/7' },
      { value: 60, label: '5/8' },
      { value: 78, label: '12/8' },
      { value: 60, label: '19/8' },
      { value: 80, label: '26/8' },
      { value: 95, label: '2/9' },
      { value: 70, label: '9/9' },
      { value: 40, label: '16/9' },
      { value: 68, label: '23/9' },
      { value: 35, label: '20/9' },
    ];
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('OBEvaluationReport')}>
            <Text style={styles.link}>OBE Evaluation Report</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          {/* Info Blocks for Course Details */}
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Code</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>BA3102</Text>
            </View>
            <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Name</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>Quantitative Techniques</Text>
            </View>      
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Type</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>Program Elective</Text>
            </View>      
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Period</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>
                Semester - <Text style={{ color: '#42454b' }}>I</Text>
              </Text>
            </View>    
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Credits (4)</Text>
            <Text style={styles.infoValue}>
              Lecture - <Text style={{ color: '#42454b' }}>3</Text>
            </Text>
            <Text style={styles.infoValue}>
              Tutorial - <Text style={{ color: '#42454b' }}>0</Text>
            </Text>
            <Text style={styles.infoValue}>
              Practical - <Text style={{ color: '#42454b' }}>1</Text>
            </Text>        
            <View style={styles.underline}>
              <Text style={styles.infoValue}>
                Project - <Text style={{ color: '#42454b' }}>0</Text>
              </Text>
            </View>   
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Outcomes (COs)</Text>
            {courseOutcomes.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.courseOutcomeRow}>
                {row.map((outcome, index) => (
                  <View key={index} style={styles.courseOutcome}>
                    <Text style={styles.courseOutcomeText}>{outcome}</Text>
                  </View>
                ))}
              </View>
            ))}
            <View style={styles.underline}></View>
          </View>
          </View>
          {/* Mapped Courses Section */}
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Mapped to this Course</Text>
            <View style={styles.mappedCourseContainer}>
              {mappedCourses.map((outcome, index) => (
                <View key={index} style={[styles.mappedCourse, { flexBasis: `${100 / 4}%` }]}>
                  <Text style={styles.mappedCourseText}>{outcome}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
<View style={styles.statsContainer}>
        <View style={styles.statValueContainer}>
          <Text style={styles.statLabel}>Total Students</Text>
          <Text style={styles.statValue}>102</Text>
         </View>
         <View style={styles.statValueContainer}>
          <Text style={styles.statLabel}>Course Average Mark</Text>
          <Text style={styles.statValue}>85%</Text>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Assessment Progress</Text>
          <BarChart
            data={assessmentData.concat(pendingData)}
            barWidth={20}
            width={screenWidth - 60}
            height={220}
            noOfSections={4}
            maxValue={100}
            yAxisLabelTexts={['0%', '25%', '50%', '75%', '100%']}
            isAnimated      
          />
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Student's Attendance</Text>
          <LineChart
            data={attendanceData}
            width={screenWidth - 60}
            height={220}
            maxValue={100}
            stepValue={25}
            noOfSections={4}
            yAxisLabelTexts={['0%', '25%', '50%', '75%', '100%']}
            isAnimated
            color1='#b1aab2'
            color2='#000'       
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  link: {
    color: '#007AFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  infoContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  infoBlock: {
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3c4049',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#939697',
    marginTop: 5,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingBottom: 8,
  },
  mappedCourseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  mappedCourse: {
    backgroundColor: '#326695',
    borderWidth: 1,
    borderColor: '#326695',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 5,
    alignItems: 'center',
  },
  mappedCourseText: {
    color: '#cdf1ff',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statValueContainer: {
    backgroundColor: '#d8d9dd',
    padding: 10,
    borderRadius: 10,
    borderColor: '#d8d9dd',
    borderWidth: 1,
    alignItems: 'center',
    width: '45%',
  },
  statLabel: {
    fontSize: 14,
    color: '#3e424d',
    textAlign: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  chartContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },


  courseOutcomeRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    marginVertical:10,
  },
  courseOutcome: {
    flex: 1,
    backgroundColor: '#a8c690', 
    borderWidth: 1,
    borderColor: '#a8c690',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  courseOutcomeText: {
    color: '#415b38',
    fontWeight: '600',
  },
});
















