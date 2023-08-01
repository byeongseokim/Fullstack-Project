package com.example.demo.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TodoEntity;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {
	// 새 인터페이스를 작성해 JpaRepository를 학장 해야함.
	// T는 테이블에 매핑할 앤티티 클래스 / ID는 엔티티의 기본 키 타입
	// TodoEntity의 기본 키인 id의 타입인 String을 넣어줌.
	// TodoRepository가 인터페이스인데 구현하는 클래스 없이도 동작하는 이유는?
	// => JpaRepository에서는 그법칙을 무시하는거 같다.

	List<TodoEntity> findByUserId(String userId);
}
