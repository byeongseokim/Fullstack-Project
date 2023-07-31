package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Todo")
public class TodoEntity {
	@Id
	@GeneratedValue(generator = "system-uuid") // ID를 자동으로 생성하겠다는 뜻
	@GenericGenerator(name = "system-uuid", strategy = "uuid") // @GenericGenerator 는 Hibernate이 제공하는 기본 Generator가 아닌
																// 나만의 것을 사용 하고 싶을때 이용한다.
	private String id; // 이 오브젝트의 아이디
	private String userId; // 이 오브젝트를 생성한 유저의 아이디
	private String title; // Todo 타이틀 예) 운동 하기
	private boolean done; // true - todo를 완료한 경우(checked)

}
